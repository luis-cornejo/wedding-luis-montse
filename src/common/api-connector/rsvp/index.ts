import { supabase } from '../supabase';

import type { RsvpInvitation, SubmitRsvpInvitationArgs } from './Rsvp.types';

export type { Attendance, RsvpGuest, RsvpGuestResponse, RsvpInvitation } from './Rsvp.types';

const isRsvpInvitation = (value: unknown): value is RsvpInvitation =>
  Boolean(value && typeof value === 'object' && 'group_name' in value && 'guests' in value);

export async function getRsvpInvitation(token: string): Promise<RsvpInvitation | null> {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase.rpc('get_rsvp_invitation', { p_token: token });
  return error || !isRsvpInvitation(data) ? null : data;
}

export async function submitRsvpInvitation({
  contactName,
  contactPhone,
  guests,
  token,
}: SubmitRsvpInvitationArgs): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  const { error } = await supabase.rpc('submit_rsvp_invitation', {
    p_contact_name: contactName,
    p_contact_phone: contactPhone,
    p_guests: guests,
    p_token: token,
  });

  return !error;
}
