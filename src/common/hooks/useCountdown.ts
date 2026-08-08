import { useEffect, useMemo, useState } from 'react';

import type { Copy, CountdownState } from '../../application/types';

const weddingDate = new Date('2026-11-08T12:00:00+01:00');

function getCountdown(): CountdownState {
  const diff = Math.max(0, weddingDate.getTime() - Date.now());
  const seconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export function useCountdown(labels: Copy['countdown']) {
  const [countdown, setCountdown] = useState<CountdownState>(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return useMemo(
    () => [
      { value: countdown.days, label: labels.days },
      { value: countdown.hours, label: labels.hours },
      { value: countdown.minutes, label: labels.minutes },
      { value: countdown.seconds, label: labels.seconds },
    ],
    [countdown, labels],
  );
}
