import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(2rem, 4vw, 4.5rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const CopyColumn = styled.div`
  max-width: 640px;
`;

export const Title = styled.h1`
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-size: clamp(3.1rem, 7vw, 6.2rem);
  line-height: 0.96;
  color: var(--primary);
  letter-spacing: -0.04em;
`;

export const Text = styled.p`
  margin: 1.5rem 0 0;
  max-width: 56ch;
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--muted);
`;

export const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin: 1.75rem 0 0;
`;

export const MetaPill = styled.span<{ $tone?: 'blue' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.15rem;
  border-radius: 999px;
  background: ${({ $tone }) =>
    $tone === 'blue' ? 'rgb(189 233 255 / 0.75)' : 'rgb(255 251 216 / 0.96)'};
  color: ${({ $tone }) => ($tone === 'blue' ? '#105871' : 'var(--primary)')};
  font-weight: 600;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.4rem;
  border-radius: 1.2rem;
  background: linear-gradient(135deg, var(--primary), #495628);
  color: #f8f5dc;
  font-weight: 700;
  box-shadow: var(--shadow);
`;

export const Visual = styled.div`
  position: relative;
  min-height: 620px;

  @media (max-width: 960px) {
    min-height: auto;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  min-height: 620px;
  object-fit: cover;
  object-position: center;
  border-radius: 4.5rem 1.2rem 4rem 1.8rem;
  box-shadow: var(--shadow);
  transform: rotate(2deg);

  @media (max-width: 960px) {
    min-height: 460px;
  }
`;

export const FloatingCard = styled.div`
  position: absolute;
  left: -1rem;
  bottom: 2rem;
  padding: 1.25rem 1.35rem;
  border-radius: 1.8rem;
  background: rgb(255 251 255 / 0.88);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow-soft);

  small,
  span {
    display: block;
    color: var(--muted);
  }

  strong {
    display: block;
    margin: 0.25rem 0;
    font-family: 'Noto Serif', serif;
    font-size: 1.2rem;
    color: var(--primary);
  }
`;
