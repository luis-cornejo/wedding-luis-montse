import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Card = styled.div`
  padding: 1.1rem 0.85rem;
  border-radius: 1.5rem;
  background: rgb(255 255 255 / 0.82);
  box-shadow: var(--shadow-soft);
  text-align: center;

  strong {
    display: block;
    font-family: 'Noto Serif', serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    color: var(--primary);
  }

  span {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }
`;
