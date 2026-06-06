import { Footer, FooterBrand, FooterText } from './SiteFooter.styled';

type Props = {
  text: string;
};

export default function SiteFooter({ text }: Props) {
  return (
    <Footer>
      <FooterBrand>Montse & Luis · 08.11.26</FooterBrand>
      <FooterText>{text}</FooterText>
    </Footer>
  );
}
