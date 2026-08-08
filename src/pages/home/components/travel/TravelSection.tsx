import type { Copy } from '../../../../application/types';
import {
  Eyebrow,
  SectionContainer,
  SectionText,
  SectionTitle,
} from '../../../../common/components/ui';
import WeatherForecast from '../weather-forecast';

import {
  Address,
  Aside,
  CopyColumn,
  MapCard,
  MapEmbed,
  SecondaryButton,
  Section,
  TipCard,
  TipsGrid,
} from './TravelSection.styled';

type Props = {
  travel: Copy['travel'];
};

export default function TravelSection({ travel }: Props) {
  return (
    <SectionContainer as={Section} id="llegar">
      <CopyColumn>
        <Eyebrow>{travel.eyebrow}</Eyebrow>
        <SectionTitle>{travel.title}</SectionTitle>
        <SectionText>{travel.body}</SectionText>
        <Address>{travel.address}</Address>
        <SecondaryButton
          href="https://maps.app.goo.gl/oZzU765JuWRgd9pLA"
          target="_blank"
          rel="noreferrer"
        >
          {travel.action}
        </SecondaryButton>
        <WeatherForecast weather={travel.weather} />
      </CopyColumn>

      <Aside>
        <MapCard>
          <MapEmbed
            title="Mapa de Mas Llombart"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48387.84327954873!2d2.2347515548603636!3d41.50909470790233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b95eee350d5b%3A0xda8199885949433f!2sMas%20Llombart!5e0!3m2!1ses!2ses!4v1775843362796!5m2!1ses!2ses"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapCard>
        <TipsGrid>
          {travel.tips.map((tip, index) => (
            <TipCard key={tip.title} $tone={index}>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </TipCard>
          ))}
        </TipsGrid>
      </Aside>
    </SectionContainer>
  );
}
