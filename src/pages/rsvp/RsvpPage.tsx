import { useEffect, useMemo, useState } from 'react';

import { rsvpFormCopy } from '../../application/content/rsvp';
import GlobalStyle from '../../application/styles/GlobalStyle';
import type { Locale } from '../../application/types';
import {
  getRsvpInvitation,
  submitRsvpInvitation,
  type RsvpGuest,
  type RsvpGuestResponse,
  type RsvpInvitation,
} from '../../common/api-connector';

import {
  BackLink,
  Choice,
  ChoiceRow,
  DietaryChoices,
  ExtraDetails,
  Field,
  Form,
  GuestCard,
  GuestName,
  Heading,
  InvitationGroup,
  Notice,
  Page,
  ReturnLink,
  SubmitButton,
  SuccessActions,
  SuccessPanel,
  SecondaryButton,
} from './RsvpPage.styled';

const getToken = () => new URLSearchParams(window.location.search).get('token');

const makeGuestResponse = (guest: RsvpGuest): RsvpGuestResponse => ({
  allergy_details: guest.allergy_details,
  attendance: guest.attendance === 'pending' ? 'attending' : guest.attendance,
  dietary_options: guest.dietary_options,
  id: guest.id,
  notes: guest.notes,
});

export default function RsvpPage() {
  const token = useMemo(() => getToken(), []);
  const [invitation, setInvitation] = useState<RsvpInvitation | null>(null);
  const [locale, setLocale] = useState<Locale>('es');
  const [expandedGuests, setExpandedGuests] = useState<Record<string, boolean>>({});
  const [responses, setResponses] = useState<Record<string, RsvpGuestResponse>>({});
  const [status, setStatus] = useState<'error' | 'idle' | 'loading' | 'saved' | 'saving'>(
    token ? 'loading' : 'error',
  );

  useEffect(() => {
    if (!token) {
      return;
    }

    void getRsvpInvitation(token).then((data) => {
      if (!data) {
        setStatus('error');
        return;
      }

      setInvitation(data);
      setLocale(data.locale === 'ca' ? 'ca' : 'es');
      setResponses(
        Object.fromEntries(data.guests.map((guest) => [guest.id, makeGuestResponse(guest)])),
      );
      setStatus('idle');
    });
  }, [token]);

  const updateResponse = (id: string, update: Partial<RsvpGuestResponse>) => {
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
    if (!token || !invitation) {
      return;
    }

    setStatus('saving');
    const hasSubmitted = await submitRsvpInvitation({
      guests: invitation.guests.map((guest) => responses[guest.id]),
      token,
    });
    setStatus(hasSubmitted ? 'saved' : 'error');
  };

  const unavailable = !token;
  const content = rsvpFormCopy[locale];

  return (
    <>
      <GlobalStyle />
      <Page>
        <BackLink href={`/?token=${encodeURIComponent(token ?? '')}`}>{content.back}</BackLink>
        <Heading>
          <h1>{content.title}</h1>
          {invitation && <InvitationGroup>{invitation.group_name}</InvitationGroup>}
          <p>{content.details}</p>
        </Heading>

        {(status === 'loading' || status === 'saving') && <Notice>{content.loading}</Notice>}
        {(status === 'error' || unavailable) && (
          <Notice>{unavailable ? content.invalidLink : content.error}</Notice>
        )}
        {status === 'saved' && (
          <SuccessPanel>
            <h2>{content.saved}</h2>
            <SuccessActions>
              <SecondaryButton onClick={() => setStatus('idle')} type="button">
                {content.savedEdit}
              </SecondaryButton>
              <ReturnLink href={`/?token=${encodeURIComponent(token ?? '')}`}>
                {content.savedReturn}
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
                    {content.attendance}
                    <ChoiceRow>
                      <Choice>
                        <input
                          checked={response.attendance === 'attending'}
                          name={`${guest.id}-attendance`}
                          onChange={() => updateResponse(guest.id, { attendance: 'attending' })}
                          type="radio"
                        />
                        {content.yes}
                      </Choice>
                      <Choice>
                        <input
                          checked={response.attendance === 'declined'}
                          name={`${guest.id}-attendance`}
                          onChange={() => updateResponse(guest.id, { attendance: 'declined' })}
                          type="radio"
                        />
                        {content.no}
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
                      <summary>{content.extraDetails}</summary>
                      <Field as="div">
                        {content.dietary}
                        <DietaryChoices>
                          {content.dietaryOptions.map((option) => (
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
                        {content.allergy}
                        <textarea
                          onChange={(event) =>
                            updateResponse(guest.id, { allergy_details: event.target.value })
                          }
                          placeholder={content.allergyPlaceholder}
                          value={response.allergy_details ?? ''}
                        />
                      </Field>
                      <Field>
                        {content.notes}
                        <textarea
                          onChange={(event) =>
                            updateResponse(guest.id, { notes: event.target.value })
                          }
                          placeholder={content.notesPlaceholder}
                          value={response.notes ?? ''}
                        />
                      </Field>
                    </ExtraDetails>
                  )}
                </GuestCard>
              );
            })}

            <SubmitButton disabled={status === 'saving'} type="submit">
              {status === 'saving' ? content.saving : content.send}
            </SubmitButton>
          </Form>
        )}
      </Page>
    </>
  );
}
