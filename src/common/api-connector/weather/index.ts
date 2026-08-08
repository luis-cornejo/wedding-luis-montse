import type { WeddingForecast } from './Weather.types';

export type { WeddingForecast } from './Weather.types';

type ForecastResponse = {
  daily?: {
    precipitation_probability_max?: number[];
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    weather_code?: number[];
  };
};

const weddingDate = '2026-11-08';

export async function getWeddingForecast(): Promise<WeddingForecast | null> {
  const forecastUrl = new URL('https://api.open-meteo.com/v1/forecast');
  forecastUrl.search = new URLSearchParams({
    latitude: '41.5091',
    longitude: '2.2348',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    start_date: weddingDate,
    end_date: weddingDate,
    timezone: 'Europe/Madrid',
  }).toString();

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as ForecastResponse;
  const daily = data.daily;
  if (
    !daily ||
    typeof daily.weather_code?.[0] !== 'number' ||
    typeof daily.temperature_2m_max?.[0] !== 'number' ||
    typeof daily.temperature_2m_min?.[0] !== 'number' ||
    typeof daily.precipitation_probability_max?.[0] !== 'number'
  ) {
    return null;
  }

  return {
    weatherCode: daily.weather_code[0],
    temperatureMax: daily.temperature_2m_max[0],
    temperatureMin: daily.temperature_2m_min[0],
    precipitationProbability: daily.precipitation_probability_max[0],
  };
}
