import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Visual = styled.div`
  position: relative;
  padding: 0 1.2rem 2rem 0;
`;

export const Photo = styled.img<{ $isPersonalized: boolean }>`
  width: 100%;
  display: block;
  max-height: ${({ $isPersonalized }) => ($isPersonalized ? '32rem' : 'none')};
  aspect-ratio: ${({ $isPersonalized }) => ($isPersonalized ? 'auto' : '1')};
  background: ${({ $isPersonalized }) => ($isPersonalized ? 'transparent' : 'var(--surface-soft)')};
  object-fit: cover;
  border-radius: 4rem 1.2rem 2rem 1.2rem;
  box-shadow: var(--shadow);
`;

export const Deadline = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  max-width: 280px;
  padding: 1rem 1.15rem;
  border-radius: 999px;
  background: rgb(189 233 255 / 0.9);
  color: #105871;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;
  box-shadow: var(--shadow-soft);
`;

export const Card = styled.div`
  padding: clamp(1.6rem, 4vw, 3rem);
  border-radius: 2.8rem;
  background: rgb(255 255 255 / 0.9);
  box-shadow: var(--shadow);
`;

export const RsvpLink = styled.a`
  display: inline-block;
  margin-top: 1.4rem;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  padding: 0.9rem 1.2rem;
  font-weight: 700;
`;

export const Field = styled.div`
  margin-top: 1.35rem;

  label {
    display: block;
    margin-bottom: 0.55rem;
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgb(53 64 16 / 0.68);
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--outline);
    border-radius: 1.1rem;
    background: var(--surface-low);
    padding: 1rem 1.05rem;
    color: var(--ink);
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid rgb(53 64 16 / 0.12);
    border-color: rgb(53 64 16 / 0.24);
  }
`;

export const FieldGroup = styled.div`
  margin-top: 1.5rem;
`;

export const GroupLabel = styled.span`
  display: block;
  margin-bottom: 0.7rem;
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgb(53 64 16 / 0.68);
  font-weight: 700;
`;

export const GroupLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.7rem;

  ${GroupLabel} {
    margin-bottom: 0;
  }
`;

export const OptionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const Choice = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.05rem;
  border-radius: 1.1rem;
  background: var(--surface-soft);
  cursor: pointer;

  input {
    accent-color: var(--primary);
  }

  span {
    color: var(--primary);
    font-weight: 600;
  }
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Chip = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: rgb(189 233 255 / 0.72);
  color: #105871;
  font-weight: 600;
  cursor: pointer;

  input {
    accent-color: var(--secondary);
  }
`;

export const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.65rem;
  cursor: pointer;

  input {
    width: auto;
    accent-color: var(--primary);
  }

  span {
    color: var(--primary);
    font-weight: 600;
  }
`;

export const HelperText = styled.p`
  margin: 0.8rem 0 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.92rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.7rem;
  border: 0;
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, var(--primary), #4d5a2b);
  color: #f8f5dc;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-soft);

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;
