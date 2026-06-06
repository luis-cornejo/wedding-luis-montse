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
    eyebrow: string;
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
    note: string;
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
