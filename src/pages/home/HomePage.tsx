import { useEffect, useState } from 'react';

import { copy } from '../../application/content/copy';
import GlobalStyle from '../../application/styles/GlobalStyle';
import type { Locale, RsvpInvitationSummary } from '../../application/types';
import { getInvitationImageUrl, getRsvpInvitation } from '../../common/api-connector';
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

type Props = {
  rsvpToken: string | null;
};

export default function HomePage({ rsvpToken }: Props) {
  const [locale, setLocale] = useState<Locale>('es');
  const [invitation, setInvitation] = useState<RsvpInvitationSummary | null>(null);
  const content = copy[locale];
  const countdownItems = useCountdown(content.countdown);

  useEffect(() => {
    if (!rsvpToken) {
      return;
    }

    void getRsvpInvitation(rsvpToken).then((data) => {
      if (!data) {
        return;
      }

      setInvitation({
        groupName: data.group_name,
        hasSubmitted: Boolean(data.submitted_at),
        imageUrl: data.has_image ? (getInvitationImageUrl(rsvpToken) ?? undefined) : undefined,
      });
      setLocale(data.locale === 'ca' ? 'ca' : 'es');
    });
  }, [rsvpToken]);

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
          <RsvpSection
            invitation={invitation && rsvpToken ? { ...invitation, token: rsvpToken } : undefined}
            rsvp={content.rsvp}
          />
          <GallerySection gallery={content.gallery} />
        </Main>
        <SiteFooter text={content.footer} />
      </PageShell>
    </>
  );
}
