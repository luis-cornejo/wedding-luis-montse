import type { Copy } from '../../../../application/types';
import {
  Eyebrow,
  SectionContainer,
  SectionIntro,
  SectionText,
  SectionTitle,
} from '../../../../common/components/ui';

import { CardSection, TimelineCard, TimelineGrid } from './DaySection.styled';

type Props = {
  day: Copy['day'];
};

export default function DaySection({ day }: Props) {
  return (
    <SectionContainer as={CardSection} id="dia">
      <SectionIntro>
        <Eyebrow>{day.eyebrow}</Eyebrow>
        <SectionTitle>{day.title}</SectionTitle>
        <SectionText>{day.intro}</SectionText>
      </SectionIntro>
      <TimelineGrid>
        {day.timeline.map((item, index) => (
          <TimelineCard key={`${item.time}-${item.title}`} $offset={index % 2 === 1}>
            <time>{item.time}</time>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </TimelineCard>
        ))}
      </TimelineGrid>
    </SectionContainer>
  );
}
