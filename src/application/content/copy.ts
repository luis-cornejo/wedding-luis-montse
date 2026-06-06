import type { Copy, Locale } from '../types';

export const copy: Record<Locale, Copy> = {
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
      body: 'Nos hace ilusión montar una celebración con textura editorial, jardines, calma y una luz cálida de noviembre. Menos artificio y más presencia: familia, amigos, una ceremonia breve y una fiesta bonita.',
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
      body: 'La finca está en Sant Fost de Campsentelles, en una zona tranquila y verde. Está lo bastante cerca como para llegar fácil y lo bastante apartada como para que el día tenga su propio ritmo.',
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
      body: 'Si tienes alguna alergia, intolerancia o sigues una dieta especial, indícanoslo aquí para trasladarlo correctamente a la finca.',
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
      send: 'Enviar confirmación',
      deadline: 'Nos ayuda mucho tener la respuesta cuanto antes.',
    },
    gallery: {
      eyebrow: 'Atmósfera',
      title: 'Jardín, mesa larga, papel cálido y luz baja.',
      body: 'El tono correcto ya no va de iconos juguetones ni estrellitas. Va de capas suaves, fotos grandes, aire y una composición más editorial.',
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
      body: 'Ens fa il·lusió muntar una celebració amb textura editorial, jardins, calma i una llum càlida de novembre. Menys artifici i més presència: família, amics, una cerimònia breu i una festa bonica.',
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
      body: 'La finca és a Sant Fost de Campsentelles, en una zona tranquil·la i verda. És prou a prop per arribar fàcil i prou apartada perquè el dia tingui el seu propi ritme.',
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
      body: 'Si tens alguna al·lèrgia, intolerància o segueixes una dieta especial, indica-ho aquí per traslladar-ho correctament a la finca.',
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
      send: 'Enviar confirmació',
      deadline: 'Ens ajuda molt tenir la resposta tan aviat com pugueu.',
    },
    gallery: {
      eyebrow: 'Atmosfera',
      title: 'Jardí, taula llarga, paper càlid i llum baixa.',
      body: 'El to correcte ja no va d’icones juganeres ni estrelletes. Va de capes suaus, fotos grans, aire i una composició més editorial.',
      quote: '“Tot el que importa cap dins d’una tarda ben explicada.”',
    },
    footer: 'Amb afecte, Montse y Luis',
  },
};
