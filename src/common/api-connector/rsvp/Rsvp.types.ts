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
  contact_name: string | null;
  contact_phone: string | null;
  group_name: string;
  guests: RsvpGuest[];
  submitted_at?: string | null;
};

export type SubmitRsvpInvitationArgs = {
  contactName: string;
  contactPhone: string;
  guests: RsvpGuestResponse[];
  token: string;
};
