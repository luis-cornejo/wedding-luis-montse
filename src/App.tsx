import { useEffect, useMemo, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

type Locale = 'es' | 'ca';

type Copy = {
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
    guestTypeInfoBody: string;
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

const weddingDate = new Date('2026-11-08T13:00:00+01:00');

const copy: Record<Locale, Copy> = {
  es: {
    nav: {
      story: 'Historia',
      day: 'El día',
      travel: 'Llegar',
      rsvp: 'RSVP',
      gallery: 'Atmósfera',
    },
    hero: {
      eyebrow: 'Montse y Luis',
      title: 'Una boda tranquila, luminosa y muy nuestra.',
      subtitle:
        'El nuevo diseño parte de una idea simple: reunirnos en una masía catalana, comer despacio, abrazarnos mucho y celebrar sin prisa.',
      date: '8 de noviembre de 2026',
      place: 'Mas Llombart · Sant Fost de Campsentelles',
      cta: 'Confirmar asistencia',
    },
    countdown: {
      days: 'Días',
      hours: 'Horas',
      minutes: 'Min',
      seconds: 'Seg',
    },
    story: {
      eyebrow: 'Nuestra historia',
      title: 'Queremos que este día se sienta como una sobremesa larga.',
      body:
        'Nos hace ilusión montar una celebración con textura editorial, jardines, calma y una luz cálida de noviembre. Menos artificio y más presencia: familia, amigos, una ceremonia breve y una fiesta bonita.',
      note: '“Que el recuerdo sea suave, bonito y fácil de volver a mirar.”',
    },
    day: {
      eyebrow: 'El día',
      title: 'Un ritmo sencillo, sin carreras.',
      intro:
        'La jornada está pensada para que todo respire: llegar con calma, compartir mesa, alargar la tarde y terminar bailando.',
      timeline: [
        {
          time: '13:00',
          title: 'Llegada',
          text: 'Tiempo para saludar, ubicarse y entrar poco a poco en el día.',
        },
        {
          time: '13:30',
          title: 'Ceremonia',
          text: 'Una ceremonia breve y cercana, rodeados de quienes importan.',
        },
        {
          time: '14:30',
          title: 'Comida',
          text: 'Mesa larga, brindis, sobremesa y conversación sin mirar el reloj.',
        },
        {
          time: '18:00',
          title: 'Fiesta',
          text: 'Música, baile y la parte menos solemne de todo esto.',
        },
      ],
    },
    travel: {
      eyebrow: 'Cómo llegar',
      title: 'Mas Llombart, a un paso de Barcelona.',
      body:
        'La finca está en Sant Fost de Campsentelles, en una zona tranquila y verde. Está lo bastante cerca como para llegar fácil y lo bastante apartada como para que el día tenga su propio ritmo.',
      address: 'Avda. de la Conreria, 16 · 08105 Sant Fost de Campsentelles, Barcelona',
      action: 'Abrir en Google Maps',
      tips: [
        {
          title: 'Coche o taxi',
          text: 'La opción más simple si vienes desde Barcelona o alrededores.',
        },
        {
          title: 'Llegad con margen',
          text: 'La idea es empezar tranquilos, sin entrar corriendo a la ceremonia.',
        },
        {
          title: 'Noviembre',
          text: 'Habrá luz bonita y probablemente fresco al caer la tarde.',
        },
      ],
    },
    rsvp: {
      eyebrow: 'RSVP',
      title: 'Confírmanos si vienes antes del 10 de junio.',
      body:
        'Si tienes alguna alergia, intolerancia o sigues una dieta especial, indícanoslo aquí para trasladarlo correctamente a la finca.',
      name: 'Nombre y apellidos',
      attendance: '¿Podrás venir?',
      yes: 'Sí, allí estaré',
      no: 'No podré venir',
      guestType: 'Tipo de comensal',
      guestTypeOptions: ['Niño', 'Bebé'],
      guestTypeInfoLabel: 'Qué significa',
      guestTypeInfoBody: 'Niño: menor de 12 años.',
      diet: 'Opciones alimentarias',
      dietOptions: ['Vegano', 'Vegetariano', 'Celíaco', 'Lactosa'],
      allergy: 'Alergia',
      allergyPlaceholder: 'Datos sobre alergia',
      other: 'Otros',
      otherPlaceholder: 'Datos sobre otras valoraciones',
      detailHint:
        'Añade aquí alergias, intolerancias o dietas especiales reales. Mejor no incluir gustos personales.',
      send: 'Enviar confirmación',
      deadline: 'Nos ayuda mucho tener la respuesta cuanto antes.',
    },
    gallery: {
      eyebrow: 'Atmósfera',
      title: 'Jardín, mesa larga, papel cálido y luz baja.',
      body:
        'El tono correcto ya no va de iconos juguetones ni estrellitas. Va de capas suaves, fotos grandes, aire y una composición más editorial.',
      quote: '“Todo lo importante cabe en una tarde bien contada.”',
    },
    footer: 'Con cariño, Montse y Luis',
  },
  ca: {
    nav: {
      story: 'Història',
      day: 'El dia',
      travel: 'Com arribar',
      rsvp: 'RSVP',
      gallery: 'Atmosfera',
    },
    hero: {
      eyebrow: 'Montse i Luis',
      title: 'Un casament tranquil, lluminós i molt nostre.',
      subtitle:
        'El nou disseny parteix d’una idea simple: reunir-nos en una masia catalana, dinar sense presses, abraçar-nos molt i celebrar amb calma.',
      date: '8 de novembre de 2026',
      place: 'Mas Llombart · Sant Fost de Campsentelles',
      cta: 'Confirmar assistència',
    },
    countdown: {
      days: 'Dies',
      hours: 'Hores',
      minutes: 'Min',
      seconds: 'Seg',
    },
    story: {
      eyebrow: 'La nostra història',
      title: 'Volem que aquest dia se senti com una sobretaula llarga.',
      body:
        'Ens fa il·lusió muntar una celebració amb textura editorial, jardins, calma i una llum càlida de novembre. Menys artifici i més presència: família, amics, una cerimònia breu i una festa bonica.',
      note: '“Que el record sigui suau, bonic i fàcil de tornar a mirar.”',
    },
    day: {
      eyebrow: 'El dia',
      title: 'Un ritme senzill, sense córrer.',
      intro:
        'La jornada està pensada perquè tot respiri: arribar amb calma, compartir taula, allargar la tarda i acabar ballant.',
      timeline: [
        {
          time: '13:00',
          title: 'Arribada',
          text: 'Temps per saludar, ubicar-se i entrar a poc a poc en el dia.',
        },
        {
          time: '13:30',
          title: 'Cerimònia',
          text: 'Una cerimònia breu i propera, envoltats de qui importa.',
        },
        {
          time: '14:30',
          title: 'Dinar',
          text: 'Taula llarga, brindis, sobretaula i conversa sense mirar el rellotge.',
        },
        {
          time: '18:00',
          title: 'Festa',
          text: 'Música, ball i la part menys solemne de tot això.',
        },
      ],
    },
    travel: {
      eyebrow: 'Com arribar',
      title: 'Mas Llombart, a tocar de Barcelona.',
      body:
        'La finca és a Sant Fost de Campsentelles, en una zona tranquil·la i verda. És prou a prop per arribar fàcil i prou apartada perquè el dia tingui el seu propi ritme.',
      address: 'Avda. de la Conreria, 16 · 08105 Sant Fost de Campsentelles, Barcelona',
      action: 'Obrir a Google Maps',
      tips: [
        {
          title: 'Cotxe o taxi',
          text: 'L’opció més simple si vens des de Barcelona o rodalia.',
        },
        {
          title: 'Arribeu amb marge',
          text: 'La idea és començar tranquils, sense entrar corrents a la cerimònia.',
        },
        {
          title: 'Novembre',
          text: 'Hi haurà una llum bonica i probablement fresca en caure la tarda.',
        },
      ],
    },
    rsvp: {
      eyebrow: 'RSVP',
      title: 'Confirmeu-nos si veniu abans del 10 de juny.',
      body:
        'Si tens alguna al·lèrgia, intolerància o segueixes una dieta especial, indica-ho aquí per traslladar-ho correctament a la finca.',
      name: 'Nom i cognoms',
      attendance: 'Podràs venir?',
      yes: 'Sí, hi seré',
      no: 'No podré venir',
      guestType: 'Tipus de comensal',
      guestTypeOptions: ['Nen', 'Bebè'],
      guestTypeInfoLabel: 'Què vol dir',
      guestTypeInfoBody: 'Nen: menor de 12 anys.',
      diet: 'Opcions alimentàries',
      dietOptions: ['Vegà', 'Vegetarià', 'Celíac', 'Lactosa'],
      allergy: 'Al·lèrgia',
      allergyPlaceholder: 'Dades sobre al·lèrgia',
      other: 'Altres',
      otherPlaceholder: 'Dades sobre altres valoracions',
      detailHint:
        'Afegeix aquí al·lèrgies, intoleràncies o dietes especials reals. Millor no incloure gustos personals.',
      send: 'Enviar confirmació',
      deadline: 'Ens ajuda molt tenir la resposta tan aviat com pugueu.',
    },
    gallery: {
      eyebrow: 'Atmosfera',
      title: 'Jardí, taula llarga, paper càlid i llum baixa.',
      body:
        'El to correcte ja no va d’icones juganeres ni estrelletes. Va de capes suaus, fotos grans, aire i una composició més editorial.',
      quote: '“Tot el que importa cap dins d’una tarda ben explicada.”',
    },
    footer: 'Amb afecte, Montse i Luis',
  },
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

  :root {
    color: #3b390d;
    background: #fffbff;
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    --surface: #fffbff;
    --surface-low: #fffbd8;
    --surface-card: #ffffff;
    --surface-soft: #f9f5cb;
    --surface-high: #f4f0bc;
    --ink: #3b390d;
    --muted: #686635;
    --primary: #354010;
    --secondary: #2b6b84;
    --tertiary: #845c32;
    --primary-soft: #dbe9a9;
    --secondary-soft: #bde9ff;
    --tertiary-soft: #e1af7e;
    --outline: rgb(191 188 130 / 0.24);
    --shadow: 0 24px 60px rgb(59 57 13 / 0.08);
    --shadow-soft: 0 18px 40px rgb(59 57 13 / 0.05);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background:
      radial-gradient(circle at 12% 18%, rgb(219 233 169 / 0.34), transparent 24%),
      radial-gradient(circle at 88% 18%, rgb(189 233 255 / 0.22), transparent 28%),
      radial-gradient(circle at 70% 86%, rgb(225 175 126 / 0.14), transparent 24%),
      var(--surface);
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    z-index: -1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;

function getCountdown() {
  const diff = Math.max(0, weddingDate.getTime() - Date.now());
  const seconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
  };
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('es');
  const [countdown, setCountdown] = useState(getCountdown);
  const [guestName, setGuestName] = useState('');
  const [attendance, setAttendance] = useState('');
  const t = copy[locale];

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = useMemo(
    () => [
      { value: countdown.days, label: t.countdown.days },
      { value: countdown.hours, label: t.countdown.hours },
      { value: countdown.minutes, label: t.countdown.minutes },
      { value: countdown.seconds, label: t.countdown.seconds },
    ],
    [countdown, t.countdown],
  );
  const canSubmit = guestName.trim().length > 0 && attendance.length > 0;

  return (
    <>
      <GlobalStyle />
      <Shell>
        <TopBar>
          <Brand href="#inicio">Montse & Luis</Brand>
          <Nav>
            <a href="#historia">{t.nav.story}</a>
            <a href="#dia">{t.nav.day}</a>
            <a href="#llegar">{t.nav.travel}</a>
            <a href="#rsvp">{t.nav.rsvp}</a>
            <a href="#atmosfera">{t.nav.gallery}</a>
          </Nav>
          <LanguageSwitch aria-label="Idioma">
            <button type="button" aria-pressed={locale === 'es'} onClick={() => setLocale('es')}>
              ES
            </button>
            <button type="button" aria-pressed={locale === 'ca'} onClick={() => setLocale('ca')}>
              CA
            </button>
          </LanguageSwitch>
        </TopBar>

        <Main>
          <HeroSection id="inicio">
            <HeroCopy>
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
              <HeroTitle>{t.hero.title}</HeroTitle>
              <HeroText>{t.hero.subtitle}</HeroText>
              <MetaRow>
                <MetaPill>{t.hero.date}</MetaPill>
                <MetaPill $tone="blue">{t.hero.place}</MetaPill>
              </MetaRow>
              <CountdownGrid>
                {countdownItems.map((item) => (
                  <CountdownCard key={item.label}>
                    <strong>{item.value.toString().padStart(2, '0')}</strong>
                    <span>{item.label}</span>
                  </CountdownCard>
                ))}
              </CountdownGrid>
              <PrimaryButton href="#rsvp">{t.hero.cta}</PrimaryButton>
            </HeroCopy>

            <HeroVisual>
              <HeroPhoto src="/images/masia.png" alt="Mas Llombart" />
              <FloatingCard>
                <small>{t.hero.date}</small>
                <strong>Mas Llombart</strong>
                <span>Sant Fost de Campsentelles</span>
              </FloatingCard>
            </HeroVisual>
          </HeroSection>

          <StorySection id="historia">
            <ImageColumn>
              <StoryFrame>
                <StoryPhoto src="/images/jardin.png" alt="Jardín de la masía" />
              </StoryFrame>
              <QuoteCard>{t.story.note}</QuoteCard>
            </ImageColumn>
            <TextColumn>
              <Eyebrow>{t.story.eyebrow}</Eyebrow>
              <SectionTitle>{t.story.title}</SectionTitle>
              <SectionText>{t.story.body}</SectionText>
            </TextColumn>
          </StorySection>

          <DaySection id="dia">
            <SectionIntro>
              <Eyebrow>{t.day.eyebrow}</Eyebrow>
              <SectionTitle>{t.day.title}</SectionTitle>
              <SectionText>{t.day.intro}</SectionText>
            </SectionIntro>
            <TimelineGrid>
              {t.day.timeline.map((item, index) => (
                <TimelineCard key={`${item.time}-${item.title}`} $offset={index % 2 === 1}>
                  <time>{item.time}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </TimelineCard>
              ))}
            </TimelineGrid>
          </DaySection>

          <TravelSection id="llegar">
            <TravelCopy>
              <Eyebrow>{t.travel.eyebrow}</Eyebrow>
              <SectionTitle>{t.travel.title}</SectionTitle>
              <SectionText>{t.travel.body}</SectionText>
              <Address>{t.travel.address}</Address>
              <SecondaryButton
                href="https://maps.app.goo.gl/oZzU765JuWRgd9pLA"
                target="_blank"
                rel="noreferrer"
              >
                {t.travel.action}
              </SecondaryButton>
            </TravelCopy>

            <TravelAside>
              <MapCard>
                <MapEmbed
                  title="Mapa de Mas Llombart"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48387.84327954873!2d2.2347515548603636!3d41.50909470790233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b95eee350d5b%3A0xda8199885949433f!2sMas%20Llombart!5e0!3m2!1ses!2ses!4v1775843362796!5m2!1ses!2ses"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </MapCard>
              <TipsGrid>
                {t.travel.tips.map((tip, index) => (
                  <TipCard key={tip.title} $tone={index}>
                    <h3>{tip.title}</h3>
                    <p>{tip.text}</p>
                  </TipCard>
                ))}
              </TipsGrid>
            </TravelAside>
          </TravelSection>

          <RsvpSection id="rsvp">
            <RsvpVisual>
              <RsvpPhoto src="/images/masia.png" alt="Vista de la finca" />
              <RsvpNote>{t.rsvp.deadline}</RsvpNote>
            </RsvpVisual>

            <RsvpCard onSubmit={(event) => event.preventDefault()}>
              <Eyebrow>{t.rsvp.eyebrow}</Eyebrow>
              <SectionTitle>{t.rsvp.title}</SectionTitle>
              <SectionText>{t.rsvp.body}</SectionText>

              <Field>
                <label htmlFor="guest-name">{t.rsvp.name}</label>
                <input
                  id="guest-name"
                  name="name"
                  autoComplete="name"
                  required
                  value={guestName}
                  onChange={(event) => setGuestName(event.target.value)}
                />
              </Field>

              <FieldGroup>
                <GroupLabel>{t.rsvp.attendance}</GroupLabel>
                <OptionRow>
                  <Choice>
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      required
                      checked={attendance === 'yes'}
                      onChange={(event) => setAttendance(event.target.value)}
                    />
                    <span>{t.rsvp.yes}</span>
                  </Choice>
                  <Choice>
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={attendance === 'no'}
                      onChange={(event) => setAttendance(event.target.value)}
                    />
                    <span>{t.rsvp.no}</span>
                  </Choice>
                </OptionRow>
              </FieldGroup>

              <FieldGroup>
                <GroupLabelRow>
                  <GroupLabel>{t.rsvp.guestType}</GroupLabel>
                  <InfoPopover>
                    <summary aria-label={t.rsvp.guestTypeInfoLabel}>i</summary>
                    <PopoverCard>{t.rsvp.guestTypeInfoBody}</PopoverCard>
                  </InfoPopover>
                </GroupLabelRow>
                <OptionRow>
                  {t.rsvp.guestTypeOptions.map((option) => (
                    <Choice key={option}>
                      <input type="checkbox" name="guestType" value={option} />
                      <span>{option}</span>
                    </Choice>
                  ))}
                </OptionRow>
              </FieldGroup>

              <FieldGroup>
                <GroupLabel>{t.rsvp.diet}</GroupLabel>
                <ChipRow>
                  {t.rsvp.dietOptions.map((option) => (
                    <Chip key={option}>
                      <input type="checkbox" name="diet" value={option} />
                      <span>{option}</span>
                    </Chip>
                  ))}
                </ChipRow>
              </FieldGroup>

              <Field>
                <CheckboxLabel htmlFor="guest-allergy">
                  <input id="guest-allergy" type="checkbox" name="allergy" value="yes" />
                  <span>{t.rsvp.allergy}</span>
                </CheckboxLabel>
                <input
                  id="guest-allergy-details"
                  name="allergyDetails"
                  placeholder={t.rsvp.allergyPlaceholder}
                />
              </Field>

              <Field>
                <CheckboxLabel htmlFor="guest-other">
                  <input id="guest-other" type="checkbox" name="other" value="yes" />
                  <span>{t.rsvp.other}</span>
                </CheckboxLabel>
                <input
                  id="guest-other-details"
                  name="otherDetails"
                  placeholder={t.rsvp.otherPlaceholder}
                />
                <HelperText>{t.rsvp.detailHint}</HelperText>
              </Field>

              <SubmitButton type="submit" disabled={!canSubmit}>
                {t.rsvp.send}
              </SubmitButton>
            </RsvpCard>
          </RsvpSection>

          <GallerySection id="atmosfera">
            <SectionIntro>
              <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
              <SectionTitle>{t.gallery.title}</SectionTitle>
              <SectionText>{t.gallery.body}</SectionText>
            </SectionIntro>

            <GalleryGrid>
              <GalleryLarge>
                <img src="/images/jardin.png" alt="Ceremonia en el jardín" />
              </GalleryLarge>
              <GalleryTall>
                <img src="/images/masia.png" alt="Exterior de la masía" />
              </GalleryTall>
              <GalleryQuote>
                <p>{t.gallery.quote}</p>
              </GalleryQuote>
              <GalleryWide>
                <img src="/images/jardin.png" alt="Espacio del jardín" />
              </GalleryWide>
            </GalleryGrid>
          </GallerySection>
        </Main>

        <Footer>
          <FooterBrand>Montse & Luis · 08.11.26</FooterBrand>
          <FooterText>{t.footer}</FooterText>
        </Footer>
      </Shell>
    </>
  );
}

const Shell = styled.div`
  color: var(--ink);
`;

const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.1rem clamp(1rem, 3vw, 2.2rem);
  background: rgb(255 251 255 / 0.82);
  backdrop-filter: blur(16px);
  box-shadow: 0 20px 40px rgb(59 57 13 / 0.04);
`;

const Brand = styled.a`
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.55rem);
  color: var(--primary);
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  color: rgb(53 64 16 / 0.72);
  font-size: 0.95rem;

  a:hover {
    color: var(--secondary);
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const LanguageSwitch = styled.div`
  display: inline-flex;
  gap: 0.35rem;
  padding: 0.3rem;
  border-radius: 999px;
  background: rgb(255 251 216 / 0.95);

  button {
    border: 0;
    background: transparent;
    color: var(--muted);
    border-radius: 999px;
    padding: 0.45rem 0.8rem;
    cursor: pointer;
  }

  button[aria-pressed='true'] {
    background: var(--surface-card);
    color: var(--primary);
    box-shadow: var(--shadow-soft);
  }
`;

const Main = styled.main`
  padding: 2rem clamp(1rem, 3vw, 2.2rem) 5rem;
`;

const HeroSection = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  gap: clamp(2rem, 4vw, 4.5rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const HeroCopy = styled.div`
  max-width: 640px;
`;

const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--tertiary);
  font-weight: 700;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-size: clamp(3.1rem, 7vw, 6.2rem);
  line-height: 0.96;
  color: var(--primary);
  letter-spacing: -0.04em;
`;

const HeroText = styled.p`
  margin: 1.5rem 0 0;
  max-width: 56ch;
  font-size: 1.08rem;
  line-height: 1.8;
  color: var(--muted);
`;

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin: 1.75rem 0 0;
`;

const MetaPill = styled.span<{ $tone?: 'blue' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.15rem;
  border-radius: 999px;
  background: ${({ $tone }) => ($tone === 'blue' ? 'rgb(189 233 255 / 0.75)' : 'rgb(255 251 216 / 0.96)')};
  color: ${({ $tone }) => ($tone === 'blue' ? '#105871' : 'var(--primary)')};
  font-weight: 600;
`;

const CountdownGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const CountdownCard = styled.div`
  padding: 1.1rem 0.85rem;
  border-radius: 1.5rem;
  background: rgb(255 255 255 / 0.82);
  box-shadow: var(--shadow-soft);
  text-align: center;

  strong {
    display: block;
    font-family: 'Noto Serif', serif;
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    color: var(--primary);
  }

  span {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.4rem;
  border-radius: 1.2rem;
  background: linear-gradient(135deg, var(--primary), #495628);
  color: #f8f5dc;
  font-weight: 700;
  box-shadow: var(--shadow);
`;

const HeroVisual = styled.div`
  position: relative;
  min-height: 620px;

  @media (max-width: 960px) {
    min-height: auto;
  }
`;

const HeroPhoto = styled.img`
  width: 100%;
  height: 100%;
  min-height: 620px;
  object-fit: cover;
  object-position: center;
  border-radius: 4.5rem 1.2rem 4rem 1.8rem;
  box-shadow: var(--shadow);
  transform: rotate(2deg);

  @media (max-width: 960px) {
    min-height: 460px;
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  left: -1rem;
  bottom: 2rem;
  padding: 1.25rem 1.35rem;
  border-radius: 1.8rem;
  background: rgb(255 251 255 / 0.88);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow-soft);

  small,
  span {
    display: block;
    color: var(--muted);
  }

  strong {
    display: block;
    margin: 0.25rem 0;
    font-family: 'Noto Serif', serif;
    font-size: 1.2rem;
    color: var(--primary);
  }
`;

const StorySection = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: minmax(320px, 0.92fr) minmax(0, 1fr);
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ImageColumn = styled.div`
  position: relative;
  padding: 1.5rem 1.5rem 3rem 0;
`;

const StoryFrame = styled.div`
  overflow: hidden;
  border-radius: 4rem 1.25rem 4rem 1.25rem;
  box-shadow: var(--shadow);
  background: var(--surface-card);
`;

const StoryPhoto = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 4 / 5;
  object-fit: cover;
`;

const QuoteCard = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 290px;
  padding: 1.3rem 1.4rem;
  border-radius: 2rem;
  background: rgb(255 251 216 / 0.94);
  font-family: 'Noto Serif', serif;
  font-style: italic;
  line-height: 1.6;
  color: var(--primary);
  box-shadow: var(--shadow-soft);
`;

const TextColumn = styled.div`
  max-width: 620px;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Noto Serif', serif;
  font-size: clamp(2.2rem, 4.8vw, 4.2rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--primary);
`;

const SectionText = styled.p`
  margin: 1.3rem 0 0;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--muted);
`;

const DaySection = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: 3.2rem;
  background: rgb(255 251 216 / 0.82);
`;

const SectionIntro = styled.div`
  max-width: 720px;
  margin-bottom: 2.25rem;
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TimelineCard = styled.article<{ $offset: boolean }>`
  padding: 1.7rem;
  border-radius: 2rem;
  background: rgb(255 255 255 / 0.88);
  box-shadow: var(--shadow-soft);
  transform: ${({ $offset }) => ($offset ? 'translateY(2rem)' : 'none')};

  time {
    display: block;
    margin-bottom: 2rem;
    font-family: 'Noto Serif', serif;
    font-size: 2rem;
    font-style: italic;
    color: rgb(53 64 16 / 0.45);
  }

  h3 {
    margin: 0 0 0.7rem;
    font-family: 'Noto Serif', serif;
    font-size: 1.5rem;
    color: var(--primary);
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.75;
  }

  @media (max-width: 980px) {
    transform: none;
  }
`;

const TravelSection = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1.1fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const TravelCopy = styled.div`
  max-width: 560px;
`;

const Address = styled.p`
  margin: 1.4rem 0 1.6rem;
  color: var(--primary);
  font-weight: 600;
  line-height: 1.7;
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.95rem 1.25rem;
  border-radius: 1.15rem;
  background: rgb(189 233 255 / 0.76);
  color: #105871;
  font-weight: 700;
`;

const TravelAside = styled.div`
  display: grid;
  gap: 1.2rem;
`;

const MapCard = styled.div`
  overflow: hidden;
  border-radius: 2.6rem;
  box-shadow: var(--shadow);
  min-height: 360px;
`;

const MapEmbed = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 360px;
  border: 0;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TipCard = styled.article<{ $tone: number }>`
  padding: 1.35rem;
  border-radius: 1.8rem;
  background: ${({ $tone }) =>
    $tone === 0
      ? 'rgb(255 251 216 / 0.92)'
      : $tone === 1
        ? 'rgb(189 233 255 / 0.62)'
        : 'rgb(225 175 126 / 0.38)'};
  box-shadow: var(--shadow-soft);

  h3 {
    margin: 0 0 0.55rem;
    font-family: 'Noto Serif', serif;
    color: var(--primary);
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
    font-size: 0.95rem;
  }
`;

const RsvpSection = styled.section`
  max-width: 1180px;
  margin: 0 auto 6rem;
  display: grid;
  grid-template-columns: minmax(320px, 0.85fr) minmax(0, 1.15fr);
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const RsvpVisual = styled.div`
  position: relative;
  padding: 0 1.2rem 2rem 0;
`;

const RsvpPhoto = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 4rem 1.2rem 2rem 1.2rem;
  box-shadow: var(--shadow);
`;

const RsvpNote = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 280px;
  padding: 1rem 1.15rem;
  border-radius: 999px;
  background: rgb(189 233 255 / 0.9);
  color: #105871;
  font-weight: 600;
  box-shadow: var(--shadow-soft);
`;

const RsvpCard = styled.form`
  padding: clamp(1.6rem, 4vw, 3rem);
  border-radius: 2.8rem;
  background: rgb(255 255 255 / 0.9);
  box-shadow: var(--shadow);
`;

const Field = styled.div`
  margin-top: 1.35rem;

  label {
    display: block;
    margin-bottom: 0.55rem;
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgb(53 64 16 / 0.68);
    font-weight: 700;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid var(--outline);
    border-radius: 1.1rem;
    background: var(--surface-low);
    padding: 1rem 1.05rem;
    color: var(--ink);
    resize: vertical;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid rgb(53 64 16 / 0.12);
    border-color: rgb(53 64 16 / 0.24);
  }
`;

const FieldGroup = styled.div`
  margin-top: 1.5rem;
`;

const GroupLabel = styled.span`
  display: block;
  margin-bottom: 0.7rem;
  font-size: 0.82rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgb(53 64 16 / 0.68);
  font-weight: 700;
`;

const GroupLabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.7rem;

  ${GroupLabel} {
    margin-bottom: 0;
  }
`;

const HelperText = styled.p`
  margin: 0 0 0.8rem;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.92rem;
`;

const InfoPopover = styled.details`
  position: relative;

  summary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.35rem;
    height: 1.35rem;
    border-radius: 999px;
    background: rgb(189 233 255 / 0.8);
    color: #105871;
    font-size: 0.78rem;
    font-weight: 700;
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;

const PopoverCard = styled.div`
  position: absolute;
  top: calc(100% + 0.55rem);
  left: 0;
  z-index: 3;
  width: min(320px, 70vw);
  padding: 0.9rem 1rem;
  border: 1px solid var(--outline);
  border-radius: 1rem;
  background: rgb(255 255 255 / 0.98);
  color: var(--muted);
  line-height: 1.6;
  box-shadow: var(--shadow-soft);
`;

const OptionRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.9rem;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const Choice = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.05rem;
  border-radius: 1.1rem;
  background: var(--surface-soft);
  cursor: pointer;

  input {
    accent-color: var(--primary);
  }

  span {
    color: var(--primary);
    font-weight: 600;
  }
`;

const CheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.65rem;
  cursor: pointer;

  input {
    width: auto;
    accent-color: var(--primary);
  }

  span {
    color: var(--primary);
    font-weight: 600;
  }
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Chip = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1rem;
  border-radius: 999px;
  background: rgb(189 233 255 / 0.72);
  color: #105871;
  font-weight: 600;
  cursor: pointer;

  input {
    accent-color: var(--secondary);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 1.7rem;
  border: 0;
  border-radius: 1.2rem;
  padding: 1rem 1.2rem;
  background: linear-gradient(135deg, var(--primary), #4d5a2b);
  color: #f8f5dc;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-soft);

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`;

const GallerySection = styled.section`
  max-width: 1180px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.2rem;
  align-items: stretch;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryLarge = styled.div`
  grid-column: span 8;
  overflow: hidden;
  border-radius: 4rem 1.2rem 1.8rem 1.2rem;
  box-shadow: var(--shadow);
  min-height: 320px;

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

const GalleryTall = styled.div`
  grid-column: span 4;
  overflow: hidden;
  border-radius: 1.2rem 3rem 2rem 1.2rem;
  box-shadow: var(--shadow);
  min-height: 320px;

  img {
    object-position: 70% center;
  }

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

const GalleryQuote = styled.div`
  grid-column: span 4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 2rem 1.2rem 3rem 1.2rem;
  background: rgb(255 251 216 / 0.9);
  box-shadow: var(--shadow-soft);

  p {
    margin: 0;
    font-family: 'Noto Serif', serif;
    font-style: italic;
    font-size: clamp(1.45rem, 3vw, 2.3rem);
    line-height: 1.35;
    color: var(--primary);
    text-align: center;
  }

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

const GalleryWide = styled.div`
  grid-column: span 8;
  overflow: hidden;
  border-radius: 2.2rem;
  box-shadow: var(--shadow);
  min-height: 260px;

  img {
    object-position: center 60%;
  }

  @media (max-width: 860px) {
    grid-column: auto;
  }
`;

const Footer = styled.footer`
  margin-top: 4rem;
  padding: 2.5rem 1rem 3rem;
  text-align: center;
  background: rgb(255 251 216 / 0.84);
  border-radius: 3rem 3rem 0 0;
`;

const FooterBrand = styled.div`
  font-family: 'Noto Serif', serif;
  font-style: italic;
  font-size: 1.2rem;
  color: var(--primary);
`;

const FooterText = styled.p`
  margin: 0.65rem 0 0;
  color: var(--muted);
`;
