import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const CopyColumn = styled.div`
  max-width: 560px;
`;

export const Address = styled.p`
  margin: 1.4rem 0 1.6rem;
  color: var(--primary);
  font-weight: 600;
  line-height: 1.7;
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.25rem;
  border-radius: 1.15rem;
  background: rgb(189 233 255 / 0.76);
  color: #105871;
  font-weight: 700;
`;

export const Aside = styled.div`
  display: grid;
  gap: 1.2rem;
`;

export const MapCard = styled.div`
  overflow: hidden;
  border-radius: 2.6rem;
  box-shadow: var(--shadow);
  min-height: 360px;
`;

export const MapEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 360px;
  border: 0;
`;

export const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TipCard = styled.article<{ $tone: number }>`
  padding: 1.35rem;
  border-radius: 1.8rem;
  background: ${({ $tone }) =>
    $tone === 0
      ? 'rgb(255 251 216 / 0.92)'
      : $tone === 1
        ? 'rgb(189 233 255 / 0.62)'
        : 'rgb(225 175 126 / 0.38)'};
  box-shadow: var(--shadow-soft);

  h3 {
    margin: 0 0 0.55rem;
    font-family: 'Noto Serif', serif;
    color: var(--primary);
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;
