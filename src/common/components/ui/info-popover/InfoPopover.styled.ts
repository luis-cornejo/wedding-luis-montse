import styled from 'styled-components';

export const Popover = styled.details`
  position: relative;

  summary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 999px;
    background: rgb(189 233 255 / 0.8);
    color: #105871;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;

export const Card = styled.div`
  position: absolute;
  top: calc(100% + 0.55rem);
  left: 0;
  z-index: 3;
  width: min(320px, 70vw);
  padding: 0.9rem 1rem;
  border: 1px solid var(--outline);
  border-radius: 1rem;
  background: rgb(255 255 255 / 0.98);
  color: var(--muted);
  line-height: 1.6;
  box-shadow: var(--shadow-soft);

  p {
    margin: 0;
  }

  p + p {
    margin-top: 0.35rem;
  }
`;
