import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageColumn = styled.div`
  position: relative;
  padding: 1.5rem 1.5rem 3rem 0;
`;

export const StoryFrame = styled.div`
  overflow: hidden;
  border-radius: 4rem 1.25rem 4rem 1.25rem;
  box-shadow: var(--shadow);
  background: var(--surface-card);
`;

export const StoryPhoto = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

export const QuoteCard = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 290px;
  padding: 1.3rem 1.4rem;
  border-radius: 2rem;
  background: rgb(255 251 216 / 0.94);
  font-family: 'Noto Serif', serif;
  font-style: italic;
  line-height: 1.6;
  color: var(--primary);
  box-shadow: var(--shadow-soft);
`;

export const TextColumn = styled.div`
  max-width: 620px;
`;
