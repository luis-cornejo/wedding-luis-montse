import { useState } from 'react';

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
    imageUrl?: string;
    token: string;
  };
  rsvp: Copy['rsvp'];
};

export default function RsvpSection({ invitation, rsvp }: Props) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageUrl =
    !hasImageError && invitation?.imageUrl ? invitation.imageUrl : '/images/masia.png';
  const personalizedBody = invitation
    ? invitation.hasSubmitted
      ? rsvp.personalizedSubmitted
      : rsvp.personalizedPending
    : rsvp.privateLink;

  return (
    <SectionContainer as={Section} id="rsvp">
      <Visual>
        <Photo
          $isPersonalized={Boolean(invitation?.imageUrl && !hasImageError)}
          alt={
            invitation?.imageUrl
              ? `Imagen de la invitación de ${invitation.groupName}`
              : 'Vista de la finca'
          }
          onError={() => setHasImageError(true)}
          src={imageUrl}
        />
        {(!invitation || !invitation.hasSubmitted) && <Deadline>{rsvp.deadline}</Deadline>}
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
