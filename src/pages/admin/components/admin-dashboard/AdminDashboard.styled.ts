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

export const RowToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  flex: 0 0 auto;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--primary);
  cursor: pointer;

  &:hover {
    background: var(--surface-soft);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.55;
  }
`;

export const GroupCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
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
  select,
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

export const SelectControl = styled.div`
  position: relative;
  margin-top: 0.45rem;

  select {
    min-height: 3rem;
    margin-top: 0;
    appearance: none;
    font: inherit;
    font-size: 1rem;
    line-height: 1.4;
    padding: 0.8rem 3rem 0.8rem 1rem;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 1rem;
    width: 1.15rem;
    height: 1.15rem;
    transform: translateY(-50%);
    color: var(--primary);
    pointer-events: none;
  }
`;

export const ImageField = styled.div`
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 700;
`;

export const ImageUpload = styled.div<{ $hasImage: boolean; $isDragging: boolean }>`
  position: relative;
  display: grid;
  place-items: center;
  width: ${({ $hasImage }) => ($hasImage ? 'min(100%, 24rem)' : '100%')};
  aspect-ratio: ${({ $hasImage }) => ($hasImage ? '4 / 3' : 'auto')};
  min-height: ${({ $hasImage }) => ($hasImage ? '12rem' : '5.8rem')};
  margin-top: 0.45rem;
  border: 1px dashed ${({ $isDragging }) => ($isDragging ? 'var(--primary)' : 'var(--outline)')};
  border-radius: 8px;
  background: ${({ $isDragging }) => ($isDragging ? 'var(--surface-low)' : 'var(--surface-soft)')};
  overflow: hidden;
  transition:
    border-color 160ms ease,
    background 160ms ease;

  &:hover,
  &:focus-within {
    border-color: var(--primary);
    background: var(--surface-low);
  }
`;

export const ImagePicker = styled.label<{ $isOverlay: boolean }>`
  position: ${({ $isOverlay }) => ($isOverlay ? 'absolute' : 'relative')};
  z-index: 1;
  inset: ${({ $isOverlay }) => ($isOverlay ? 'auto 3.7rem 0.75rem auto' : 'auto')};
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--primary);
  cursor: pointer;
  opacity: ${({ $isOverlay }) => ($isOverlay ? 0 : 1)};
  pointer-events: ${({ $isOverlay }) => ($isOverlay ? 'none' : 'auto')};
  transition: opacity 160ms ease;

  ${ImageUpload}:hover &,
  ${ImageUpload}:focus-within & {
    opacity: 1;
    pointer-events: auto;
  }

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
  }

  svg {
    width: ${({ $isOverlay }) => ($isOverlay ? '2.5rem' : '1.5rem')};
    height: ${({ $isOverlay }) => ($isOverlay ? '2.5rem' : '1.5rem')};
    padding: ${({ $isOverlay }) => ($isOverlay ? '0.55rem' : '0')};
    border-radius: 50%;
    background: ${({ $isOverlay }) => ($isOverlay ? 'rgb(255 255 255 / 0.92)' : 'transparent')};
    color: var(--secondary);
    box-shadow: ${({ $isOverlay }) => ($isOverlay ? 'var(--shadow-soft)' : 'none')};
  }

  span {
    color: var(--muted);
    font-size: 0.82rem;
    font-weight: 400;
    line-height: 1.45;
  }

  strong {
    display: block;
    margin-bottom: 0.15rem;
    color: var(--primary);
    font-size: 0.9rem;
  }
`;

export const ImagePreview = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ImageClearButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 0.75rem;
  bottom: 0.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  background: rgb(255 255 255 / 0.92);
  color: #8a2634;
  box-shadow: var(--shadow-soft);
  cursor: pointer;

  ${ImageUpload}:not(:hover):not(:focus-within) & {
    opacity: 0;
    pointer-events: none;
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
  min-width: 860px;
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

export const TableScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  padding-bottom: 0.35rem;

  &::-webkit-scrollbar {
    height: 0.55rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgb(53 64 16 / 0.26);
  }
`;

export const Status = styled.span<{ $submitted: boolean }>`
  color: ${({ $submitted }) => ($submitted ? '#28633e' : '#8a5c00')};
  font-weight: 700;
`;

export const ExpandedRow = styled.tr`
  td {
    padding: 0;
    border-bottom: 1px solid var(--outline);
    background: rgb(53 64 16 / 0.035);
  }
`;

export const GuestDetailTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    padding: 0.75rem 1rem;
    border: 0;
    border-top: 1px solid rgb(53 64 16 / 0.1);
    text-align: left;
    vertical-align: top;
    overflow-wrap: anywhere;
  }

  th {
    border-top: 0;
    color: var(--muted);
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  td {
    font-size: 0.9rem;
  }

  th:first-child,
  td:first-child {
    width: 20%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 14%;
  }

  td:first-child {
    color: var(--primary);
    font-weight: 700;
  }
`;

export const GuestAttendance = styled.span<{ $status: 'attending' | 'declined' | 'pending' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: ${({ $status }) => {
    if ($status === 'attending') {
      return '#28633e';
    }

    if ($status === 'declined') {
      return '#9f2737';
    }

    return '#8a5c00';
  }};
  font-weight: 700;

  svg {
    flex: 0 0 auto;
  }
`;

export const SentCheckbox = styled.input`
  width: 1.15rem;
  height: 1.15rem;
  margin: 0;
  accent-color: var(--primary);
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.55;
  }
`;
