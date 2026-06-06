import type { Copy } from '../../../../application/types';
import { Countdown, Eyebrow } from '../../../../common/components/ui';

import {
  CopyColumn,
  FloatingCard,
  MetaPill,
  MetaRow,
  Photo,
  PrimaryButton,
  Section,
  Text,
  Title,
  Visual,
} from './HeroSection.styled';

type Props = {
  countdownItems: Array<{ value: number; label: string }>;
  hero: Copy['hero'];
};

export default function HeroSection({ countdownItems, hero }: Props) {
  return (
    <Section id="inicio">
      <CopyColumn>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <Title>{hero.title}</Title>
        <Text>{hero.subtitle}</Text>
        <MetaRow>
          <MetaPill>{hero.date}</MetaPill>
          <MetaPill $tone="blue">{hero.place}</MetaPill>
        </MetaRow>
        <Countdown items={countdownItems} />
        <PrimaryButton href="#rsvp">{hero.cta}</PrimaryButton>
      </CopyColumn>

      <Visual>
        <Photo src="/images/masia.png" alt="Mas Llombart" />
        <FloatingCard>
          <small>{hero.date}</small>
          <strong>Mas Llombart</strong>
          <span>Sant Fost de Campsentelles</span>
        </FloatingCard>
      </Visual>
    </Section>
  );
}
