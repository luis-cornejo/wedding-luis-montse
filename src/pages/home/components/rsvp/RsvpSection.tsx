import type { Copy } from '../../../../application/types';
import {
  Eyebrow,
  SectionContainer,
  SectionText,
  SectionTitle,
} from '../../../../common/components/ui';

import { Card, Deadline, Photo, RsvpLink, Section, Visual } from './RsvpSection.styled';

type Props = {
  invitation?: {
    groupName: string;
    hasSubmitted: boolean;
    token: string;
  };
  rsvp: Copy['rsvp'];
};

export default function RsvpSection({ invitation, rsvp }: Props) {
  const personalizedBody = invitation
    ? invitation.hasSubmitted
      ? rsvp.personalizedSubmitted
      : rsvp.personalizedPending
    : rsvp.privateLink;

  return (
    <SectionContainer as={Section} id="rsvp">
      <Visual>
        <Photo src="/images/masia.png" alt="Vista de la finca" />
        <Deadline>{rsvp.deadline}</Deadline>
      </Visual>

      <Card>
        <Eyebrow>{rsvp.eyebrow}</Eyebrow>
        <SectionTitle>
          {invitation
            ? rsvp.personalizedGreeting.replace('{groupName}', invitation.groupName)
            : rsvp.title}
        </SectionTitle>
        <SectionText>{rsvp.body}</SectionText>
        <SectionText>{personalizedBody}</SectionText>
        {invitation && (
          <RsvpLink href={`/confirmar?token=${encodeURIComponent(invitation.token)}`}>
            {rsvp.privateLinkAction}
          </RsvpLink>
        )}
      </Card>
    </SectionContainer>
  );
}
