import styled from 'styled-components';

export const PageShell = styled.div`
  color: var(--ink);
`;

export const Main = styled.main`
  padding: 2rem clamp(1rem, 3vw, 2.2rem) 5rem;
`;

export const SectionContainer = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
`;

export const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--tertiary);
  font-weight: 700;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-size: clamp(2.2rem, 4.8vw, 4.2rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--primary);
`;

export const SectionText = styled.p`
  margin: 1.3rem 0 0;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--muted);
`;

export const SectionIntro = styled.div`
  max-width: 720px;
  margin-bottom: 2.25rem;
`;
