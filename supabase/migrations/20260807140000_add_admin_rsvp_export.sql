create or replace function public.get_admin_rsvp_export()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  result jsonb;
begin
  if not public.is_admin() then
    raise exception 'Unauthorized';
  end if;

  select coalesce(
    jsonb_agg(
      jsonb_build_object(
        'allergy_details', guest.allergy_details,
        'attendance', guest.attendance,
        'contact_name', invitation.contact_name,
        'contact_phone', invitation.contact_phone,
        'dietary_options', guest.dietary_options,
        'guest_name', guest.full_name,
        'group_name', invitation.group_name,
        'notes', guest.notes,
        'submitted_at', invitation.submitted_at
      ) order by invitation.group_name, guest.sort_order, guest.full_name
    ),
    '[]'::jsonb
  )
  into result
  from public.invitations invitation
  join public.guests guest on guest.invitation_id = invitation.id;

  return result;
end;
$$;

grant execute on function public.get_admin_rsvp_export() to authenticated;
