import styled from 'styled-components';

export const Forecast = styled.section`
  display: grid;
  gap: 0.9rem;
  margin-top: 2.25rem;
  padding-top: 1.4rem;
  border-top: 1px solid var(--outline);
`;

export const ForecastTitle = styled.h3`
  margin: 0;
  color: var(--primary);
  font-family: 'Noto Serif', Georgia, serif;
  font-size: 1.2rem;
`;

export const ForecastMessage = styled.p`
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
`;

export const ForecastData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--primary);
`;

export const ForecastIcon = styled.span`
  display: inline-grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  background: rgb(189 233 255 / 0.62);
  color: #105871;
`;

export const ForecastValues = styled.dl`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1.25rem;
  margin: 0;

  div {
    display: grid;
    gap: 0.1rem;
  }

  dt {
    color: var(--muted);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  dd {
    margin: 0;
    font-weight: 700;
  }
`;
