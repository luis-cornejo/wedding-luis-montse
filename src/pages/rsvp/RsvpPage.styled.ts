import styled from 'styled-components';

export const Page = styled.main`
  width: min(100% - 2rem, 900px);
  margin: 0 auto;
  padding: 4rem 0 5rem;
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: 2.5rem;
  color: var(--primary);
  font-weight: 700;
`;

export const Heading = styled.header`
  margin-bottom: 2rem;

  h1 {
    margin: 0;
    font-family: 'Noto Serif', Georgia, serif;
    font-size: clamp(2rem, 5vw, 3.4rem);
    color: var(--primary);
  }

  p {
    max-width: 620px;
    margin: 0.9rem 0 0;
    color: var(--muted);
    line-height: 1.7;
  }
`;

export const Notice = styled.div`
  padding: 1.25rem;
  border-radius: 8px;
  background: var(--surface-card);
  color: var(--primary);
  box-shadow: var(--shadow-soft);
`;

export const SuccessPanel = styled.section`
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border-radius: 8px;
  background: var(--surface-card);
  box-shadow: var(--shadow);

  h2 {
    margin: 0;
    color: var(--primary);
    font-family: 'Noto Serif', Georgia, serif;
    font-size: 1.75rem;
  }

  p {
    margin: 0.8rem 0 0;
    color: var(--muted);
    line-height: 1.6;
  }
`;

export const SuccessActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const SecondaryButton = styled.button`
  border: 1px solid var(--outline);
  border-radius: 8px;
  background: transparent;
  color: var(--primary);
  padding: 0.8rem 1.1rem;
  font-weight: 700;
  cursor: pointer;
`;

export const ReturnLink = styled.a`
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  padding: 0.8rem 1.1rem;
  font-weight: 700;
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const GuestCard = styled.section`
  margin: 0;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 0;
  border-radius: 8px;
  background: var(--surface-card);
  box-shadow: var(--shadow-soft);
`;

export const GuestName = styled.h2`
  margin: 0;
  color: var(--primary);
  font-family: 'Noto Serif', Georgia, serif;
  font-size: 1.45rem;
`;

export const ExtraDetails = styled.details`
  margin-top: 1.25rem;
  border-top: 1px solid var(--outline);
  padding-top: 1.1rem;

  summary {
    color: var(--primary);
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
  }
`;

export const Field = styled.label`
  display: block;
  margin-top: 1.25rem;
  color: var(--primary);
  font-size: 0.86rem;
  font-weight: 700;

  > input,
  > textarea {
    width: 100%;
    margin-top: 0.55rem;
    border: 1px solid var(--outline);
    border-radius: 8px;
    background: var(--surface-low);
    color: var(--ink);
    padding: 0.85rem 1rem;
  }

  > textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

export const ChoiceRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 0.55rem;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const Choice = styled.label`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-radius: 8px;
  background: var(--surface-soft);
  padding: 0.8rem;
  color: var(--primary);
  cursor: pointer;

  input {
    accent-color: var(--primary);
  }
`;

export const DietaryChoices = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.55rem;
`;

export const ContactCard = styled.div`
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 8px;
  background: var(--surface-card);
  box-shadow: var(--shadow-soft);
`;

export const SubmitButton = styled.button`
  justify-self: start;
  border: 0;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  padding: 0.95rem 1.4rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.65;
  }
`;
