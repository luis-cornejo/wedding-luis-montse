import styled from 'styled-components';

export const CardSection = styled.section`
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 3.2rem;
  background: rgb(255 251 216 / 0.82);
`;

export const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineCard = styled.article<{ $offset: boolean }>`
  padding: 1.7rem;
  border-radius: 2rem;
  background: rgb(255 255 255 / 0.88);
  box-shadow: var(--shadow-soft);
  transform: ${({ $offset }) => ($offset ? 'translateY(2rem)' : 'none')};

  time {
    display: block;
    margin-bottom: 2rem;
    font-family: 'Noto Serif', serif;
    font-size: 2rem;
    font-style: italic;
    color: rgb(53 64 16 / 0.45);
  }

  h3 {
    margin: 0 0 0.7rem;
    font-family: 'Noto Serif', serif;
    font-size: 1.5rem;
    color: var(--primary);
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.75;
  }

  @media (max-width: 980px) {
    transform: none;
  }
`;
