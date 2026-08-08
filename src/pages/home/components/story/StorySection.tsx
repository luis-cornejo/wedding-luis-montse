import type { Copy } from '../../../../application/types';
import { Eyebrow, SectionText, SectionTitle } from '../../../../common/components/ui';

import { ImageColumn, Section, StoryFrame, StoryPhoto, TextColumn } from './StorySection.styled';

type Props = {
  story: Copy['story'];
};

export default function StorySection({ story }: Props) {
  return (
    <Section id="historia">
      <ImageColumn>
        <StoryFrame>
          <StoryPhoto
            src="/images/celebrarlo-juntos-ilustrada.png"
            alt="Ilustración de Luis y Montse compartiendo un momento divertido"
          />
        </StoryFrame>
      </ImageColumn>
      <TextColumn>
        <Eyebrow>{story.eyebrow}</Eyebrow>
        <SectionTitle>{story.title}</SectionTitle>
        <SectionText>{story.body}</SectionText>
      </TextColumn>
    </Section>
  );
}
