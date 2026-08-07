import { supabase } from '../supabase';

import type {
  AdminInvitationDetail,
  AdminRsvpExportRow,
  AdminRsvpOverview,
  CreatedInvitation,
} from './Admin.types';

export type {
  AdminInvitation,
  AdminInvitationDetail,
  AdminRsvpExportRow,
  AdminRsvpOverview,
  CreatedInvitation,
} from './Admin.types';

const isAdminRsvpOverview = (value: unknown): value is AdminRsvpOverview =>
  Boolean(value && typeof value === 'object' && 'invitations' in value && 'totals' in value);

export async function getAdminRsvpOverview(): Promise<AdminRsvpOverview | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.rpc('get_admin_rsvp_overview');
  return error || !isAdminRsvpOverview(data) ? null : data;
}

const isAdminInvitationDetail = (value: unknown): value is AdminInvitationDetail =>
  Boolean(value && typeof value === 'object' && 'guests' in value && 'token' in value);

const isCreatedInvitation = (value: unknown): value is CreatedInvitation =>
  Boolean(
    value && typeof value === 'object' && 'group_name' in value && 'id' in value && 'token' in value,
  );

export async function getAdminInvitation(
  invitationId: string,
): Promise<AdminInvitationDetail | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.rpc('get_admin_invitation', {
    p_invitation_id: invitationId,
  });
  return error || !isAdminInvitationDetail(data) ? null : data;
}

export async function createAdminInvitation(
  groupName: string,
  guestNames: string[],
  contactPhone: string,
  locale: 'ca' | 'es',
): Promise<CreatedInvitation | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.rpc('create_admin_invitation', {
    p_group_name: groupName,
    p_guest_names: guestNames,
    p_contact_phone: contactPhone,
    p_locale: locale,
  });

  return error || !isCreatedInvitation(data) ? null : data;
}

export async function deleteAdminInvitation(invitationId: string): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  const { error } = await supabase.rpc('delete_admin_invitation', {
    p_invitation_id: invitationId,
  });
  return !error;
}

export async function setAdminInvitationSent(
  invitationId: string,
  isSent: boolean,
): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  const { error } = await supabase.rpc('set_admin_invitation_sent', {
    p_invitation_id: invitationId,
    p_is_sent: isSent,
  });
  return !error;
}

export async function getAdminRsvpExport(): Promise<AdminRsvpExportRow[] | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.rpc('get_admin_rsvp_export');
  return error || !Array.isArray(data) ? null : (data as AdminRsvpExportRow[]);
}

type UpdateAdminInvitationArgs = {
  contactPhone: string;
  groupName: string;
  guests: Array<{ full_name: string; id?: string }>;
  invitationId: string;
  locale: 'ca' | 'es';
};

export async function updateAdminInvitation({
  contactPhone,
  groupName,
  guests,
  invitationId,
  locale,
}: UpdateAdminInvitationArgs): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  const { error } = await supabase.rpc('update_admin_invitation', {
    p_group_name: groupName,
    p_guests: guests,
    p_invitation_id: invitationId,
    p_contact_phone: contactPhone,
    p_locale: locale,
  });
  return !error;
}

export async function isCurrentUserAdmin(): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  const { data, error } = await supabase.rpc('is_admin');
  return !error && data === true;
}
