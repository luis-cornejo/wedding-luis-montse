import type { Locale } from '../types';

export const rsvpFormCopy: Record<
  Locale,
  {
    allergy: string;
    allergyPlaceholder: string;
    attendance: string;
    back: string;
    details: string;
    dietary: string;
    dietaryOptions: string[];
    error: string;
    extraDetails: string;
    invalidLink: string;
    loading: string;
    no: string;
    notes: string;
    notesPlaceholder: string;
    saved: string;
    savedEdit: string;
    savedReturn: string;
    saving: string;
    send: string;
    title: string;
    yes: string;
  }
> = {
  es: {
    allergy: 'Alergias o intolerancias',
    allergyPlaceholder: 'Indica cualquier información relevante',
    attendance: '¿Asistirá?',
    back: 'Volver a la boda',
    details: 'Completa una respuesta por cada persona incluida en vuestra invitación.',
    dietary: 'Opciones alimentarias',
    dietaryOptions: ['Vegano', 'Vegetariano', 'Celíaco', 'Sin lactosa'],
    extraDetails: 'Menú, alergias y observaciones',
    error: 'No hemos podido cargar esta invitación. Comprueba que has abierto el enlace completo.',
    invalidLink: 'Este enlace de confirmación no es válido.',
    loading: 'Cargando invitación...',
    no: 'No podré asistir',
    notes: 'Observaciones',
    notesPlaceholder: 'Cualquier otro detalle importante para nosotros',
    saved: 'Gracias. Hemos guardado vuestra respuesta.',
    savedEdit: 'Editar respuesta',
    savedReturn: 'Ir a la boda',
    saving: 'Guardando...',
    send: 'Enviar confirmación',
    title: 'Confirmación de asistencia',
    yes: 'Sí, asistiré',
  },
  ca: {
    allergy: 'Al·lèrgies o intoleràncies',
    allergyPlaceholder: 'Indica qualsevol informació rellevant',
    attendance: 'Hi assistirà?',
    back: 'Tornar al casament',
    details: 'Completa una resposta per a cada persona inclosa a la vostra invitació.',
    dietary: 'Opcions alimentàries',
    dietaryOptions: ['Vegà', 'Vegetarià', 'Celíac', 'Sense lactosa'],
    extraDetails: 'Menú, al·lèrgies i observacions',
    error: 'No hem pogut carregar aquesta invitació. Comprova que has obert l’enllaç complet.',
    invalidLink: 'Aquest enllaç de confirmació no és vàlid.',
    loading: 'Carregant invitació...',
    no: 'No podré assistir-hi',
    notes: 'Observacions',
    notesPlaceholder: 'Qualsevol altre detall important per a nosaltres',
    saved: 'Gràcies. Hem desat la vostra resposta.',
    savedEdit: 'Editar resposta',
    savedReturn: 'Anar al casament',
    saving: 'Desant...',
    send: 'Enviar confirmació',
    title: 'Confirmació d’assistència',
    yes: 'Sí, hi assistiré',
  },
};
