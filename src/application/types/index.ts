export type Locale = 'es' | 'ca';

export type Copy = {
  nav: {
    story: string;
    day: string;
    travel: string;
    rsvp: string;
    gallery: string;
  };
  hero: {
    title: string;
    subtitle: string;
    date: string;
    place: string;
    cta: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  story: {
    eyebrow: string;
    title: string;
    body: string;
  };
  day: {
    eyebrow: string;
    title: string;
    intro: string;
    timeline: Array<{ time: string; title: string; text: string }>;
  };
  travel: {
    eyebrow: string;
    title: string;
    body: string;
    address: string;
    action: string;
    tips: Array<{ title: string; text: string }>;
    weather: {
      title: string;
      availableSoon: string;
      loading: string;
      unavailable: string;
      temperature: string;
      precipitation: string;
    };
  };
  rsvp: {
    eyebrow: string;
    title: string;
    body: string;
    name: string;
    attendance: string;
    yes: string;
    no: string;
    guestType: string;
    guestTypeOptions: string[];
    guestTypeInfoLabel: string;
    guestTypeInfoBody: string[];
    diet: string;
    dietOptions: string[];
    allergy: string;
    allergyPlaceholder: string;
    other: string;
    otherPlaceholder: string;
    detailHint: string;
    privateLink: string;
    privateLinkAction: string;
    personalizedGreeting: string;
    personalizedPending: string;
    personalizedSubmitted: string;
    send: string;
    deadline: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    body: string;
    quote: string;
  };
  footer: string;
};

export type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type RsvpInvitationSummary = {
  groupName: string;
  hasSubmitted: boolean;
};
