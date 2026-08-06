import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem clamp(1rem, 3vw, 2.2rem);
  background: rgb(255 251 255 / 0.82);
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 40px rgb(59 57 13 / 0.04);
`;

export const Brand = styled.a`
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.55rem);
  color: var(--primary);
  white-space: nowrap;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  color: rgb(53 64 16 / 0.72);
  font-size: 0.95rem;

  a:hover {
    color: var(--secondary);
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

export const LanguageSwitch = styled.div`
  display: inline-flex;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  background: rgb(255 251 216 / 0.95);

  button {
    border: 0;
    background: transparent;
    color: var(--muted);
    border-radius: 999px;
    padding: 0.45rem 0.8rem;
    cursor: pointer;
  }

  button[aria-pressed='true'] {
    background: var(--surface-card);
    color: var(--primary);
    box-shadow: var(--shadow-soft);
  }
`;
