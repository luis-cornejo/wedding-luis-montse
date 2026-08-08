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
  padding: 0 1.5rem 0 0;
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

export const TextColumn = styled.div`
  max-width: 620px;
`;
