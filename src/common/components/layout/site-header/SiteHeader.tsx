import type { Copy, Locale } from '../../../../application/types';

import { Brand, Header, LanguageSwitch, Nav } from './SiteHeader.styled';

type Props = {
  locale: Locale;
  nav: Copy['nav'];
  onLocaleChange: (locale: Locale) => void;
};

export default function SiteHeader({ locale, nav, onLocaleChange }: Props) {
  return (
    <Header>
      <Brand href="#inicio">Montse & Luis</Brand>
      <Nav>
        <a href="#historia">{nav.story}</a>
        <a href="#dia">{nav.day}</a>
        <a href="#llegar">{nav.travel}</a>
        <a href="#rsvp">{nav.rsvp}</a>
        <a href="#atmosfera">{nav.gallery}</a>
      </Nav>
      <LanguageSwitch aria-label="Idioma">
        <button type="button" aria-pressed={locale === 'es'} onClick={() => onLocaleChange('es')}>
          ES
        </button>
        <button type="button" aria-pressed={locale === 'ca'} onClick={() => onLocaleChange('ca')}>
          CA
        </button>
      </LanguageSwitch>
    </Header>
  );
}
