import { useState } from 'react';

import { copy } from '../../application/content/copy';
import GlobalStyle from '../../application/styles/GlobalStyle';
import type { Locale } from '../../application/types';
import { SiteFooter, SiteHeader } from '../../common/components/layout';
import { Main, PageShell } from '../../common/components/ui';
import { useCountdown } from '../../common/hooks/useCountdown';

import {
  DaySection,
  GallerySection,
  HeroSection,
  RsvpSection,
  StorySection,
  TravelSection,
} from './components';

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('es');
  const content = copy[locale];
  const countdownItems = useCountdown(content.countdown);

  return (
    <>
      <GlobalStyle />
      <PageShell>
        <SiteHeader locale={locale} nav={content.nav} onLocaleChange={setLocale} />
        <Main>
          <HeroSection countdownItems={countdownItems} hero={content.hero} />
          <StorySection story={content.story} />
          <DaySection day={content.day} />
          <TravelSection travel={content.travel} />
          <RsvpSection rsvp={content.rsvp} />
          <GallerySection gallery={content.gallery} />
        </Main>
        <SiteFooter text={content.footer} />
      </PageShell>
    </>
  );
}
