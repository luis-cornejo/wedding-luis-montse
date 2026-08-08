import type { Copy, Locale } from '../types';

export const copy: Record<Locale, Copy> = {
  es: {
    nav: {
      story: 'Historia',
      day: 'El día',
      travel: 'Llegar',
      rsvp: 'Confirmación',
      gallery: 'Atmósfera',
    },
    hero: {
      title: 'Después de mucho meditarlo, hemos decidido casarnos.',
      subtitle:
        'Lo celebraremos con una boda cercana, buena comida, buena compañía y muchas ganas de disfrutar.',
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
      eyebrow: 'Con los nuestros',
      title: 'Celebrarlo juntos',
      body: 'Después de tantos años juntos, nos hace ilusión reunir en un mismo día a la gente que nos ha acompañado a lo largo de la vida. Queremos compartir y celebrar este momento con familia, amigos y todas las personas especiales que han estado a nuestro lado.',
    },
    day: {
      eyebrow: 'El día',
      title: 'El plan',
      intro:
        'La idea es sencilla: pasarlo bien. No hay código de vestimenta, así que ven como quieras, pero con traje o vestido (jajaja).',
      timeline: [
        {
          time: '12:00',
          title: 'Llegada',
          text: 'Tiempo para saludar, ubicarse y entrar poco a poco en el día.',
        },
        {
          time: '12:30',
          title: 'Ceremonia',
          text: 'Una ceremonia breve y cercana, rodeados de quienes importan.',
        },
        {
          time: '14:00',
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
      body: 'La finca está en Sant Fost de Campsentelles, cerca de Barcelona, en un sitio tranquilo y solo para nosotros.',
      address: 'Avda. de la Conreria, 16 · 08105 Sant Fost de Campsentelles, Barcelona',
      action: 'Abrir en Google Maps',
      tips: [
        {
          title: 'Coche o taxi',
          text: 'La opción más simple si vienes desde Barcelona o alrededores.',
        },
        {
          title: 'Parking',
          text: 'Hay zona para aparcar en la finca.',
        },
        {
          title: 'Noviembre',
          text: 'Habrá luz bonita y probablemente fresco al caer la tarde.',
        },
      ],
      weather: {
        title: 'El tiempo para el gran día',
        availableSoon: 'La previsión estará disponible unos días antes de la boda.',
        loading: 'Cargando previsión...',
        unavailable: 'No hemos podido cargar la previsión ahora mismo.',
        temperature: 'Temperatura',
        precipitation: 'Probabilidad de lluvia',
      },
    },
    rsvp: {
      eyebrow: 'Confirma tu asistencia',
      title: 'Confirma y cuéntanos los detalles',
      body: 'Gracias por confirmar vuestra asistencia. Nos hace muchísima ilusión celebrar este día con vosotros.',
      name: 'Nombre y apellidos',
      attendance: '¿Podrás venir?',
      yes: 'Sí, allí estaré',
      no: 'No podré venir',
      guestType: 'Tipo de comensal',
      guestTypeOptions: ['Niño', 'Bebé'],
      guestTypeInfoLabel: 'Qué significa',
      guestTypeInfoBody: ['Niños: de 0 a 11 años.', 'Adultos: 12 años o más.'],
      diet: 'Opciones alimentarias',
      dietOptions: ['Vegano', 'Vegetariano', 'Celíaco', 'Lactosa'],
      allergy: 'Alergia',
      allergyPlaceholder: 'Datos sobre alergia',
      other: 'Otros',
      otherPlaceholder: 'Datos sobre otras valoraciones',
      detailHint:
        'Añade aquí alergias, intolerancias o dietas especiales reales. Mejor no incluir gustos personales.',
      privateLink:
        'La confirmación se realiza desde el enlace personal incluido en vuestra invitación.',
      privateLinkAction: 'Abrir confirmación',
      personalizedGreeting: 'Hola, {groupName}',
      personalizedPending:
        'Tu invitación está lista. Desde aquí puedes confirmar la asistencia de vuestro grupo.',
      personalizedSubmitted:
        'Ya hemos guardado vuestra confirmación. Puedes revisarla o modificarla cuando lo necesites.',
      send: 'Enviar confirmación',
      deadline: 'Nos ayuda mucho tener la respuesta cuanto antes.',
    },
    gallery: {
      eyebrow: 'Atmósfera',
      title: 'Un sitio para celebrar cada momento.',
      body: 'La ceremonia está pensada para celebrarse al aire libre. Si el tiempo no acompaña, la haremos dentro, en un espacio igual de especial para compartir el momento.',
      quote: '“Si llueve, no nos mojaremos. Y será igual de bonito.”',
    },
    footer: 'Con cariño, Montse y Luis',
  },
  ca: {
    nav: {
      story: 'Història',
      day: 'El dia',
      travel: 'Com arribar',
      rsvp: 'Confirmació',
      gallery: 'Atmosfera',
    },
    hero: {
      title: 'Després de rumiar-ho molt, hem decidit casar-nos.',
      subtitle:
        'Ho celebrarem amb un casament proper, bon menjar, bona companyia i moltes ganes de gaudir.',
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
      eyebrow: 'Amb els nostres',
      title: 'Celebrar-ho junts',
      body: 'Després de tants anys junts, ens fa il·lusió reunir en un mateix dia la gent que ens ha acompanyat al llarg de la vida. Volem compartir i celebrar aquest moment amb família, amics i totes les persones especials que han estat al nostre costat.',
    },
    day: {
      eyebrow: 'El dia',
      title: 'El pla',
      intro:
        'La idea és senzilla: passar-ho bé. No hi ha codi de vestimenta, així que vine com vulguis, però una mica arreglat (jajaja).',
      timeline: [
        {
          time: '12:00',
          title: 'Arribada',
          text: 'Temps per saludar, ubicar-se i entrar a poc a poc en el dia.',
        },
        {
          time: '12:30',
          title: 'Cerimònia',
          text: 'Una cerimònia breu i propera, envoltats de qui importa.',
        },
        {
          time: '14:00',
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
      body: 'La finca és a Sant Fost de Campsentelles, a prop de Barcelona, en un lloc tranquil i només per a nosaltres.',
      address: 'Avda. de la Conreria, 16 · 08105 Sant Fost de Campsentelles, Barcelona',
      action: 'Obrir a Google Maps',
      tips: [
        {
          title: 'Cotxe o taxi',
          text: 'L’opció més simple si vens des de Barcelona o rodalia.',
        },
        {
          title: 'Pàrquing',
          text: 'Hi ha zona per aparcar a la finca.',
        },
        {
          title: 'Novembre',
          text: 'Hi haurà una llum bonica i probablement fresca en caure la tarda.',
        },
      ],
      weather: {
        title: 'El temps per al gran dia',
        availableSoon: 'La previsió estarà disponible uns dies abans del casament.',
        loading: 'Carregant la previsió...',
        unavailable: 'No hem pogut carregar la previsió ara mateix.',
        temperature: 'Temperatura',
        precipitation: 'Probabilitat de pluja',
      },
    },
    rsvp: {
      eyebrow: 'Confirma la teva assistència',
      title: 'Confirma i explica’ns els detalls',
      body: 'Gràcies per confirmar la vostra assistència. Ens fa moltíssima il·lusió celebrar aquest dia amb vosaltres.',
      name: 'Nom i cognoms',
      attendance: 'Podràs venir?',
      yes: 'Sí, hi seré',
      no: 'No podré venir',
      guestType: 'Tipus de comensal',
      guestTypeOptions: ['Nen', 'Bebè'],
      guestTypeInfoLabel: 'Què vol dir',
      guestTypeInfoBody: ['Nens: de 0 a 11 anys.', 'Adults: 12 anys o més.'],
      diet: 'Opcions alimentàries',
      dietOptions: ['Vegà', 'Vegetarià', 'Celíac', 'Lactosa'],
      allergy: 'Al·lèrgia',
      allergyPlaceholder: 'Dades sobre al·lèrgia',
      other: 'Altres',
      otherPlaceholder: 'Dades sobre altres valoracions',
      detailHint:
        'Afegeix aquí al·lèrgies, intoleràncies o dietes especials reals. Millor no incloure gustos personals.',
      privateLink: 'La confirmació es fa des de l’enllaç personal inclòs a la vostra invitació.',
      privateLinkAction: 'Obrir confirmació',
      personalizedGreeting: 'Hola, {groupName}',
      personalizedPending:
        'La vostra invitació ja està a punt. Des d’aquí podeu confirmar l’assistència del vostre grup.',
      personalizedSubmitted:
        'Ja hem desat la vostra confirmació. La podeu revisar o modificar quan ho necessiteu.',
      send: 'Enviar confirmació',
      deadline: 'Ens ajuda molt tenir la resposta tan aviat com pugueu.',
    },
    gallery: {
      eyebrow: 'Atmosfera',
      title: 'Un lloc per celebrar cada moment.',
      body: 'La cerimònia està pensada per celebrar-se a l’aire lliure. Si el temps no acompanya, la farem a dins, en un espai igual d’especial per compartir el moment.',
      quote: '“Si plou, no ens mullarem. I serà igual de bonic.”',
    },
    footer: 'Amb afecte, Montse y Luis',
  },
};
