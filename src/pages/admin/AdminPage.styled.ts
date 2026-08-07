import styled from 'styled-components';

export const Page = styled.main`
  width: min(100% - 2rem, 1120px);
  margin: 0 auto;
  padding: 4rem 0 5rem;
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 2.5rem;
  color: var(--primary);
  font-weight: 700;
`;

export const Notice = styled.p`
  color: var(--muted);
`;

export const Unauthorized = styled.section`
  width: min(100%, 560px);
  padding: 2rem;
  border-radius: 8px;
  background: var(--surface-card);
  box-shadow: var(--shadow-soft);

  p {
    margin: 0;
    color: var(--primary);
    font-size: 1.1rem;
    font-weight: 700;
  }
`;
