import { Cloud, CloudRain, CloudSun, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { Copy } from '../../../../application/types';
import { getWeddingForecast, type WeddingForecast } from '../../../../common/api-connector';

import {
  Forecast,
  ForecastData,
  ForecastIcon,
  ForecastMessage,
  ForecastTitle,
  ForecastValues,
} from './WeatherForecast.styled';

type Props = {
  weather: Copy['travel']['weather'];
};

const weddingDate = new Date('2026-11-08T12:00:00+01:00');
const forecastAvailabilityInDays = 16;

const isForecastAvailable = () =>
  weddingDate.getTime() - Date.now() <= forecastAvailabilityInDays * 24 * 60 * 60 * 1000;

const WeatherIcon = ({ weatherCode }: Pick<WeddingForecast, 'weatherCode'>) => {
  if (weatherCode >= 51) {
    return <CloudRain aria-hidden="true" size={22} />;
  }

  if (weatherCode >= 3) {
    return <Cloud aria-hidden="true" size={22} />;
  }

  if (weatherCode >= 1) {
    return <CloudSun aria-hidden="true" size={22} />;
  }

  return <Sun aria-hidden="true" size={22} />;
};

export default function WeatherForecast({ weather }: Props) {
  const [forecast, setForecast] = useState<WeddingForecast | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'unavailable'>(
    isForecastAvailable() ? 'loading' : 'idle',
  );

  useEffect(() => {
    if (!isForecastAvailable()) {
      return;
    }

    void getWeddingForecast().then((data) => {
      if (!data) {
        setStatus('unavailable');
        return;
      }

      setForecast(data);
      setStatus('idle');
    });
  }, []);

  return (
    <Forecast aria-live="polite">
      <ForecastTitle>{weather.title}</ForecastTitle>
      {forecast ? (
        <ForecastData>
          <ForecastIcon>
            <WeatherIcon weatherCode={forecast.weatherCode} />
          </ForecastIcon>
          <ForecastValues>
            <div>
              <dt>{weather.temperature}</dt>
              <dd>
                {Math.round(forecast.temperatureMin)}-{Math.round(forecast.temperatureMax)} C
              </dd>
            </div>
            <div>
              <dt>{weather.precipitation}</dt>
              <dd>{forecast.precipitationProbability}%</dd>
            </div>
          </ForecastValues>
        </ForecastData>
      ) : (
        <ForecastMessage>
          {status === 'loading'
            ? weather.loading
            : status === 'unavailable'
              ? weather.unavailable
              : weather.availableSoon}
        </ForecastMessage>
      )}
    </Forecast>
  );
}
