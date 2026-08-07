import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  h1 {
    margin: 0;
    color: var(--primary);
    font-family: 'Noto Serif', Georgia, serif;
    font-size: clamp(2rem, 4vw, 3rem);
  }

  p {
    margin: 0.5rem 0 0;
    color: var(--muted);
  }
`;

export const AccountActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    margin: 0;
  }
`;

export const LogoutButton = styled.button`
  border: 1px solid var(--outline);
  border-radius: 8px;
  background: transparent;
  color: var(--primary);
  padding: 0.7rem 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;

export const Summary = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
  border: 1px solid var(--outline);
  border-radius: 8px;
  background: var(--outline);

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Metric = styled.div`
  min-height: 120px;
  padding: 1.25rem;
  background: var(--surface-card);

  span {
    display: block;
    color: var(--muted);
    font-size: 0.85rem;
    font-weight: 700;
  }

  strong {
    display: block;
    margin-top: 0.5rem;
    color: var(--primary);
    font-family: 'Noto Serif', Georgia, serif;
    font-size: 2.2rem;
  }
`;

export const TableSection = styled.section`
  margin-top: 2.5rem;
`;

export const TableActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border: 0;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  padding: 0.75rem 0.95rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;

export const SecondaryAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--outline);
  border-radius: 8px;
  background: transparent;
  color: var(--primary);
  padding: 0.7rem 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;

export const OpenButton = styled.button`
  border: 0;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
  padding: 0;
  cursor: pointer;
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: #8a2634;
  cursor: pointer;

  &:hover {
    background: #f9e5e8;
  }
`;

export const IconActions = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: rgb(26 30 14 / 0.45);
`;

export const Modal = styled.section`
  width: min(100%, 760px);
  max-height: min(800px, calc(100vh - 2rem));
  overflow: auto;
  padding: clamp(1.25rem, 4vw, 2.5rem);
  border-radius: 8px;
  background: var(--surface-card);
  box-shadow: var(--shadow);

  h2,
  h3 {
    margin: 0;
    color: var(--primary);
    font-family: 'Noto Serif', Georgia, serif;
  }

  h3 {
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }

  p {
    color: var(--muted);
    line-height: 1.5;
  }
`;

export const GuestList = styled.ul`
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 1.1rem 0;
    border-top: 1px solid var(--outline);
  }

  strong,
  span {
    display: block;
  }

  span {
    margin-top: 0.35rem;
    color: var(--muted);
    font-size: 0.9rem;
  }
`;

export const GuestMeta = styled.dl`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 0.45rem 1rem;
  margin: 0.8rem 0 0;
  color: var(--muted);
  font-size: 0.9rem;

  dt {
    font-weight: 700;
  }

  dd {
    margin: 0;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border: 0;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
  cursor: pointer;
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;

  label {
    color: var(--primary);
    font-size: 0.9rem;
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 0.45rem;
    border: 1px solid var(--outline);
    border-radius: 8px;
    background: var(--surface-low);
    color: var(--ink);
    padding: 0.75rem;
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

export const GuestInputRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 0.65rem;
  margin-top: 0.45rem;
`;

export const GuestSection = styled.section`
  h3 {
    margin: 0;
    color: var(--primary);
    font-size: 0.9rem;
  }
`;

export const GuestTags = styled.ul`
  display: grid;
  gap: 0.5rem;
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
`;

export const GuestTag = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem 0.8rem;
  border-radius: 8px;
  background: var(--surface-soft);
  color: var(--primary);
  font-weight: 700;

  button {
    border: 0;
    background: transparent;
    color: var(--primary);
    cursor: pointer;
    font-weight: 700;
  }

  input {
    width: 100%;
    margin: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: inherit;
    padding: 0;
    font-weight: inherit;
  }
`;

export const Link = styled.a`
  display: block;
  overflow-wrap: anywhere;
  margin-top: 0.75rem;
  color: var(--secondary);
  font-size: 0.85rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: var(--surface-card);

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid var(--outline);
    text-align: left;
  }

  th {
    color: var(--muted);
    font-size: 0.8rem;
    text-transform: uppercase;
  }
`;

export const Status = styled.span<{ $submitted: boolean }>`
  color: ${({ $submitted }) => ($submitted ? '#28633e' : '#8a5c00')};
  font-weight: 700;
`;
