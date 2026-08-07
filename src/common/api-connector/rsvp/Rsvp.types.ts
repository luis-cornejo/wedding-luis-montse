export type Attendance = 'attending' | 'declined';

export type RsvpGuest = {
  allergy_details: string | null;
  attendance: Attendance | 'pending';
  dietary_options: string[];
  full_name: string;
  id: string;
  notes: string | null;
};

export type RsvpGuestResponse = Omit<RsvpGuest, 'full_name'> & { attendance: Attendance };

export type RsvpInvitation = {
  group_name: string;
  locale: 'ca' | 'es';
  guests: RsvpGuest[];
  submitted_at?: string | null;
};

export type SubmitRsvpInvitationArgs = {
  guests: RsvpGuestResponse[];
  token: string;
};
