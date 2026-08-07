export type AdminInvitation = {
  group_name: string;
  guest_count: number;
  has_submitted: boolean;
  id: string;
  updated_at: string;
};

export type AdminRsvpOverview = {
  invitations: AdminInvitation[];
  totals: {
    attending: number;
    declined: number;
    pending: number;
    total: number;
  };
};

export type AdminGuest = {
  allergy_details: string | null;
  attendance: 'attending' | 'declined' | 'pending';
  dietary_options: string[];
  full_name: string;
  id: string;
  notes: string | null;
};

export type AdminInvitationDetail = {
  contact_name: string | null;
  contact_phone: string | null;
  group_name: string;
  guests: AdminGuest[];
  id: string;
  submitted_at: string | null;
  token: string;
};

export type CreatedInvitation = Pick<AdminInvitationDetail, 'group_name' | 'id' | 'token'>;

export type AdminRsvpExportRow = {
  allergy_details: string | null;
  attendance: 'attending' | 'declined' | 'pending';
  contact_name: string | null;
  contact_phone: string | null;
  dietary_options: string[];
  guest_name: string;
  group_name: string;
  notes: string | null;
  submitted_at: string | null;
};
