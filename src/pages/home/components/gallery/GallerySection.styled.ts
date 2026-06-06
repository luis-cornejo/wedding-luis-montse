import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.2rem;
  align-items: stretch;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const Large = styled.div`
  grid-column: span 8;
  overflow: hidden;
  border-radius: 4rem 1.2rem 1.8rem 1.2rem;
  box-shadow: var(--shadow);
  min-height: 320px;

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

export const Tall = styled.div`
  grid-column: span 4;
  overflow: hidden;
  border-radius: 1.2rem 3rem 2rem 1.2rem;
  box-shadow: var(--shadow);
  min-height: 320px;

  img {
    object-position: 70% center;
  }

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

export const Quote = styled.div`
  grid-column: span 4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 2rem 1.2rem 3rem 1.2rem;
  background: rgb(255 251 216 / 0.9);
  box-shadow: var(--shadow-soft);

  p {
    margin: 0;
    font-family: 'Noto Serif', serif;
    font-style: italic;
    font-size: clamp(1.45rem, 3vw, 2.3rem);
    line-height: 1.35;
    color: var(--primary);
    text-align: center;
  }

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

export const Wide = styled.div`
  grid-column: span 8;
  overflow: hidden;
  border-radius: 2.2rem;
  box-shadow: var(--shadow);
  min-height: 260px;

  img {
    object-position: center 60%;
  }

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;
