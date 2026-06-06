import { Card, Popover } from './InfoPopover.styled';

type Props = {
  body: string;
  label: string;
};

export default function InfoPopover({ body, label }: Props) {
  return (
    <Popover>
      <summary aria-label={label}>i</summary>
      <Card>{body}</Card>
    </Popover>
  );
}
