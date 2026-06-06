import { useMemo, useState } from 'react';

import type { Copy } from '../../../../application/types';
import {
  Eyebrow,
  InfoPopover,
  SectionContainer,
  SectionText,
  SectionTitle,
} from '../../../../common/components/ui';

import {
  Card,
  CheckboxLabel,
  Chip,
  ChipRow,
  Choice,
  Deadline,
  Field,
  FieldGroup,
  GroupLabel,
  GroupLabelRow,
  HelperText,
  OptionRow,
  Photo,
  Section,
  SubmitButton,
  Visual,
} from './RsvpSection.styled';

type Props = {
  rsvp: Copy['rsvp'];
};

export default function RsvpSection({ rsvp }: Props) {
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('');

  const canSubmit = useMemo(
    () => guestName.trim().length > 0 && attendance.length > 0,
    [attendance, guestName],
  );

  return (
    <SectionContainer as={Section} id="rsvp">
      <Visual>
        <Photo src="/images/masia.png" alt="Vista de la finca" />
        <Deadline>{rsvp.deadline}</Deadline>
      </Visual>

      <Card onSubmit={(event) => event.preventDefault()}>
        <Eyebrow>{rsvp.eyebrow}</Eyebrow>
        <SectionTitle>{rsvp.title}</SectionTitle>
        <SectionText>{rsvp.body}</SectionText>

        <Field>
          <label htmlFor="guest-name">{rsvp.name}</label>
          <input
            id="guest-name"
            name="name"
            autoComplete="name"
            required
            value={guestName}
            onChange={(event) => setGuestName(event.target.value)}
          />
        </Field>

        <FieldGroup>
          <GroupLabel>{rsvp.attendance}</GroupLabel>
          <OptionRow>
            <Choice>
              <input
                checked={attendance === 'yes'}
                name="attendance"
                onChange={(event) => setAttendance(event.target.value)}
                required
                type="radio"
                value="yes"
              />
              <span>{rsvp.yes}</span>
            </Choice>
            <Choice>
              <input
                checked={attendance === 'no'}
                name="attendance"
                onChange={(event) => setAttendance(event.target.value)}
                type="radio"
                value="no"
              />
              <span>{rsvp.no}</span>
            </Choice>
          </OptionRow>
        </FieldGroup>

        <FieldGroup>
          <GroupLabelRow>
            <GroupLabel>{rsvp.guestType}</GroupLabel>
            <InfoPopover body={rsvp.guestTypeInfoBody} label={rsvp.guestTypeInfoLabel} />
          </GroupLabelRow>
          <OptionRow>
            {rsvp.guestTypeOptions.map((option) => (
              <Choice key={option}>
                <input name="guestType" type="checkbox" value={option} />
                <span>{option}</span>
              </Choice>
            ))}
          </OptionRow>
        </FieldGroup>

        <FieldGroup>
          <GroupLabel>{rsvp.diet}</GroupLabel>
          <ChipRow>
            {rsvp.dietOptions.map((option) => (
              <Chip key={option}>
                <input name="diet" type="checkbox" value={option} />
                <span>{option}</span>
              </Chip>
            ))}
          </ChipRow>
        </FieldGroup>

        <Field>
          <CheckboxLabel htmlFor="guest-allergy">
            <input id="guest-allergy" name="allergy" type="checkbox" value="yes" />
            <span>{rsvp.allergy}</span>
          </CheckboxLabel>
          <input
            id="guest-allergy-details"
            name="allergyDetails"
            placeholder={rsvp.allergyPlaceholder}
          />
        </Field>

        <Field>
          <CheckboxLabel htmlFor="guest-other">
            <input id="guest-other" name="other" type="checkbox" value="yes" />
            <span>{rsvp.other}</span>
          </CheckboxLabel>
          <input id="guest-other-details" name="otherDetails" placeholder={rsvp.otherPlaceholder} />
          <HelperText>{rsvp.detailHint}</HelperText>
        </Field>

        <SubmitButton disabled={!canSubmit} type="submit">
          {rsvp.send}
        </SubmitButton>
      </Card>
    </SectionContainer>
  );
}
