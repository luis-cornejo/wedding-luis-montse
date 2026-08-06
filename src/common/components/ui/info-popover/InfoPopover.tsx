import { useEffect, useRef } from 'react';

import { Card, Popover } from './InfoPopover.styled';

type Props = {
  body: string[];
  label: string;
};

export default function InfoPopover({ body, label }: Props) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!ref.current?.open) {
        return;
      }

      if (event.target instanceof Node && !ref.current.contains(event.target)) {
        ref.current.open = false;
      }
    }

    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, []);

  return (
    <Popover ref={ref}>
      <summary aria-label={label}>i</summary>
      <Card>
        {body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </Card>
    </Popover>
  );
}
