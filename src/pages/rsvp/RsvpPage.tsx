import { useEffect, useMemo, useState } from 'react';

import { rsvpFormCopy } from '../../application/content/rsvp';
import { supabase } from '../../application/lib/supabase';
import GlobalStyle from '../../application/styles/GlobalStyle';

import {
  BackLink,
  Choice,
  ChoiceRow,
  ContactCard,
  DietaryChoices,
  ExtraDetails,
  Field,
  Form,
  GuestCard,
  GuestName,
  Heading,
  Notice,
  Page,
  ReturnLink,
  SubmitButton,
  SuccessActions,
  SuccessPanel,
  SecondaryButton,
} from './RsvpPage.styled';

type Attendance = 'attending' | 'declined';

type Guest = {
  allergy_details: string | null;
  attendance: Attendance | 'pending';
  dietary_options: string[];
  full_name: string;
  id: string;
  notes: string | null;
};

type Invitation = {
  contact_name: string | null;
  contact_phone: string | null;
  group_name: string;
  guests: Guest[];
};

type GuestResponse = Omit<Guest, 'full_name'> & { attendance: Attendance };

const getToken = () => new URLSearchParams(window.location.search).get('token');

const isInvitation = (value: unknown): value is Invitation =>
  Boolean(value && typeof value === 'object' && 'group_name' in value && 'guests' in value);

const makeGuestResponse = (guest: Guest): GuestResponse => ({
  allergy_details: guest.allergy_details,
  attendance: guest.attendance === 'pending' ? 'attending' : guest.attendance,
  dietary_options: guest.dietary_options,
  id: guest.id,
  notes: guest.notes,
});

export default function RsvpPage() {
  const token = useMemo(() => getToken(), []);
  const [invitation, setInvitation] = useState<Invitation | null>(null);
  const [expandedGuests, setExpandedGuests] = useState<Record<string, boolean>>({});
  const [responses, setResponses] = useState<Record<string, GuestResponse>>({});
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [status, setStatus] = useState<'error' | 'idle' | 'loading' | 'saved' | 'saving'>(
    token ? 'loading' : 'error',
  );

  useEffect(() => {
    if (!token || !supabase) {
      return;
    }

    void supabase.rpc('get_rsvp_invitation', { p_token: token }).then(({ data, error }) => {
      if (error || !isInvitation(data)) {
        setStatus('error');
        return;
      }

      setInvitation(data);
      setContactName(data.contact_name ?? '');
      setContactPhone(data.contact_phone ?? '');
      setResponses(
        Object.fromEntries(data.guests.map((guest) => [guest.id, makeGuestResponse(guest)])),
      );
      setStatus('idle');
    });
  }, [token]);

  const updateResponse = (id: string, update: Partial<GuestResponse>) => {
    setResponses((current) => ({ ...current, [id]: { ...current[id], ...update } }));
  };

  const toggleDietaryOption = (id: string, option: string) => {
    const current = responses[id];
    const dietaryOptions = current.dietary_options.includes(option)
      ? current.dietary_options.filter((item) => item !== option)
      : [...current.dietary_options, option];
    updateResponse(id, { dietary_options: dietaryOptions });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase || !token || !invitation) {
      return;
    }

    setStatus('saving');
    const { error } = await supabase.rpc('submit_rsvp_invitation', {
      p_contact_name: contactName,
      p_contact_phone: contactPhone,
      p_guests: invitation.guests.map((guest) => responses[guest.id]),
      p_token: token,
    });
    setStatus(error ? 'error' : 'saved');
  };

  const unavailable = !supabase || !token;

  return (
    <>
      <GlobalStyle />
      <Page>
        <BackLink href={`/?token=${encodeURIComponent(token ?? '')}`}>Volver a la boda</BackLink>
        <Heading>
          <h1>{rsvpFormCopy.title}</h1>
          {invitation && <p>{invitation.group_name}</p>}
          <p>{rsvpFormCopy.details}</p>
        </Heading>

        {(status === 'loading' || status === 'saving') && <Notice>{rsvpFormCopy.loading}</Notice>}
        {(status === 'error' || unavailable) && (
          <Notice>{unavailable ? rsvpFormCopy.invalidLink : rsvpFormCopy.error}</Notice>
        )}
        {status === 'saved' && (
          <SuccessPanel>
            <h2>{rsvpFormCopy.saved}</h2>
            <SuccessActions>
              <SecondaryButton onClick={() => setStatus('idle')} type="button">
                {rsvpFormCopy.savedEdit}
              </SecondaryButton>
              <ReturnLink href={`/?token=${encodeURIComponent(token ?? '')}`}>
                {rsvpFormCopy.savedReturn}
              </ReturnLink>
            </SuccessActions>
          </SuccessPanel>
        )}

        {invitation && status !== 'loading' && status !== 'saved' && (
          <Form onSubmit={handleSubmit}>
            {invitation.guests.map((guest) => {
              const response = responses[guest.id];
              const hasExtraDetails = Boolean(
                response.allergy_details || response.dietary_options.length || response.notes,
              );
              return (
                <GuestCard key={guest.id}>
                  <GuestName>{guest.full_name}</GuestName>
                  <Field>
                    {rsvpFormCopy.attendance}
                    <ChoiceRow>
                      <Choice>
                        <input
                          checked={response.attendance === 'attending'}
                          name={`${guest.id}-attendance`}
                          onChange={() => updateResponse(guest.id, { attendance: 'attending' })}
                          type="radio"
                        />
                        {rsvpFormCopy.yes}
                      </Choice>
                      <Choice>
                        <input
                          checked={response.attendance === 'declined'}
                          name={`${guest.id}-attendance`}
                          onChange={() => updateResponse(guest.id, { attendance: 'declined' })}
                          type="radio"
                        />
                        {rsvpFormCopy.no}
                      </Choice>
                    </ChoiceRow>
                  </Field>

                  {response.attendance === 'attending' && (
                    <ExtraDetails
                      onToggle={(event) => {
                        const isOpen = event.currentTarget.open;
                        setExpandedGuests((current) => ({
                          ...current,
                          [guest.id]: isOpen,
                        }));
                      }}
                      open={expandedGuests[guest.id] ?? hasExtraDetails}
                    >
                      <summary>{rsvpFormCopy.extraDetails}</summary>
                      <Field as="div">
                        {rsvpFormCopy.dietary}
                        <DietaryChoices>
                          {rsvpFormCopy.dietaryOptions.map((option) => (
                            <Choice key={option}>
                              <input
                                checked={response.dietary_options.includes(option)}
                                onChange={() => toggleDietaryOption(guest.id, option)}
                                type="checkbox"
                              />
                              {option}
                            </Choice>
                          ))}
                        </DietaryChoices>
                      </Field>
                      <Field>
                        {rsvpFormCopy.allergy}
                        <textarea
                          onChange={(event) =>
                            updateResponse(guest.id, { allergy_details: event.target.value })
                          }
                          placeholder={rsvpFormCopy.allergyPlaceholder}
                          value={response.allergy_details ?? ''}
                        />
                      </Field>
                      <Field>
                        {rsvpFormCopy.notes}
                        <textarea
                          onChange={(event) =>
                            updateResponse(guest.id, { notes: event.target.value })
                          }
                          placeholder={rsvpFormCopy.notesPlaceholder}
                          value={response.notes ?? ''}
                        />
                      </Field>
                    </ExtraDetails>
                  )}
                </GuestCard>
              );
            })}

            <ContactCard>
              <Field>
                {rsvpFormCopy.contactName}
                <input
                  onChange={(event) => setContactName(event.target.value)}
                  value={contactName}
                />
              </Field>
              <Field>
                {rsvpFormCopy.contactPhone}
                <input
                  autoComplete="tel"
                  inputMode="tel"
                  onChange={(event) => setContactPhone(event.target.value)}
                  type="tel"
                  value={contactPhone}
                />
              </Field>
            </ContactCard>

            <SubmitButton disabled={status === 'saving'} type="submit">
              {status === 'saving' ? rsvpFormCopy.saving : rsvpFormCopy.send}
            </SubmitButton>
          </Form>
        )}
      </Page>
    </>
  );
}
