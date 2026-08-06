import { useEffect, useState } from 'react';

import { copy } from '../../application/content/copy';
import { supabase } from '../../application/lib/supabase';
import GlobalStyle from '../../application/styles/GlobalStyle';
import type { Locale, RsvpInvitationSummary } from '../../application/types';
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

const isInvitationSummary = (
  value: unknown,
): value is { group_name: string; submitted_at: string | null } =>
  Boolean(value && typeof value === 'object' && 'group_name' in value && 'submitted_at' in value);

export default function HomePage({ rsvpToken }: Props) {
  const [locale, setLocale] = useState<Locale>('es');
  const [invitation, setInvitation] = useState<RsvpInvitationSummary | null>(null);
  const content = copy[locale];
  const countdownItems = useCountdown(content.countdown);

  useEffect(() => {
    if (!rsvpToken || !supabase) {
      return;
    }

    void supabase.rpc('get_rsvp_invitation', { p_token: rsvpToken }).then(({ data, error }) => {
      if (error || !isInvitationSummary(data)) {
        return;
      }

      setInvitation({ groupName: data.group_name, hasSubmitted: Boolean(data.submitted_at) });
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
