import styled from 'styled-components';

export const LoginForm = styled.form`
  width: min(100%, 440px);
  padding: 2rem;
  border-radius: 8px;
  background: var(--surface-card);
  box-shadow: var(--shadow);

  h1 {
    margin: 0;
    color: var(--primary);
    font-family: 'Noto Serif', Georgia, serif;
    font-size: 2rem;
  }

  p {
    margin: 0.75rem 0 0;
    color: var(--muted);
    line-height: 1.6;
  }
`;

export const Field = styled.label`
  display: block;
  margin-top: 1.5rem;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 700;

  input {
    width: 100%;
    margin-top: 0.5rem;
    border: 1px solid var(--outline);
    border-radius: 8px;
    background: var(--surface-low);
    color: var(--ink);
    padding: 0.85rem 1rem;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.25rem;
  border: 0;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  padding: 0.9rem 1rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.65;
  }
`;

export const Message = styled.p<{ $isError?: boolean }>`
  color: ${({ $isError }) => ($isError ? '#8a2634' : '#28633e')} !important;
  font-weight: 600;
`;
