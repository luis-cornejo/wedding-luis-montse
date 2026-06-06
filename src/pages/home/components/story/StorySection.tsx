import type { Copy } from '../../../../application/types';
import { Eyebrow, SectionText, SectionTitle } from '../../../../common/components/ui';

import {
  ImageColumn,
  QuoteCard,
  Section,
  StoryFrame,
  StoryPhoto,
  TextColumn,
} from './StorySection.styled';

type Props = {
  story: Copy['story'];
};

export default function StorySection({ story }: Props) {
  return (
    <Section id="historia">
      <ImageColumn>
        <StoryFrame>
          <StoryPhoto src="/images/jardin.png" alt="Jardín de la masía" />
        </StoryFrame>
        <QuoteCard>{story.note}</QuoteCard>
      </ImageColumn>
      <TextColumn>
        <Eyebrow>{story.eyebrow}</Eyebrow>
        <SectionTitle>{story.title}</SectionTitle>
        <SectionText>{story.body}</SectionText>
      </TextColumn>
    </Section>
  );
}
