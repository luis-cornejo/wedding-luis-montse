import { Card, Grid } from './Countdown.styled';

type Item = {
  value: number;
  label: string;
};

type Props = {
  items: Item[];
};

export default function Countdown({ items }: Props) {
  return (
    <Grid>
      {items.map((item) => (
        <Card key={item.label}>
          <strong>{item.value.toString().padStart(2, '0')}</strong>
          <span>{item.label}</span>
        </Card>
      ))}
    </Grid>
  );
}
