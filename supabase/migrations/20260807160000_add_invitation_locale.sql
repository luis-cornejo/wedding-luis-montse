alter table public.invitations
add column locale text not null default 'es' check (locale in ('ca', 'es'));

create or replace function public.get_rsvp_invitation(p_token uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare result jsonb;
begin
  select jsonb_build_object(
    'group_name', invitation.group_name,
    'locale', invitation.locale,
    'submitted_at', invitation.submitted_at,
    'guests', coalesce(jsonb_agg(jsonb_build_object(
      'id', guest.id, 'full_name', guest.full_name, 'attendance', guest.attendance,
      'dietary_options', guest.dietary_options, 'allergy_details', guest.allergy_details,
      'notes', guest.notes
    ) order by guest.sort_order, guest.full_name) filter (where guest.id is not null), '[]'::jsonb)
  ) into result
  from public.invitations invitation
  left join public.guests guest on guest.invitation_id = invitation.id
  where invitation.token = p_token
  group by invitation.id;
  return result;
end;
$$;

create function public.create_admin_invitation(
  p_group_name text, p_guest_names jsonb, p_contact_phone text, p_locale text
)
returns jsonb
language plpgsql security definer set search_path = public
as $$
declare result jsonb;
begin
  if p_locale not in ('ca', 'es') then raise exception 'Invalid locale'; end if;
  select public.create_admin_invitation(p_group_name, p_guest_names, p_contact_phone) into result;
  update public.invitations set locale = p_locale where id = (result ->> 'id')::uuid;
  return result;
end;
$$;

create function public.update_admin_invitation(
  p_invitation_id uuid, p_group_name text, p_guests jsonb, p_contact_phone text, p_locale text
)
returns void
language plpgsql security definer set search_path = public
as $$
begin
  if p_locale not in ('ca', 'es') then raise exception 'Invalid locale'; end if;
  perform public.update_admin_invitation(p_invitation_id, p_group_name, p_guests, p_contact_phone);
  update public.invitations set locale = p_locale where id = p_invitation_id;
end;
$$;

create or replace function public.get_admin_invitation(p_invitation_id uuid)
returns jsonb
language plpgsql security definer set search_path = public
as $$
declare result jsonb;
begin
  if not public.is_admin() then raise exception 'Unauthorized'; end if;
  select jsonb_build_object(
    'contact_name', invitation.contact_name, 'contact_phone', invitation.contact_phone,
    'group_name', invitation.group_name, 'id', invitation.id, 'locale', invitation.locale,
    'submitted_at', invitation.submitted_at, 'token', invitation.token,
    'guests', coalesce(jsonb_agg(jsonb_build_object(
      'allergy_details', guest.allergy_details, 'attendance', guest.attendance,
      'dietary_options', guest.dietary_options, 'full_name', guest.full_name,
      'id', guest.id, 'notes', guest.notes
    ) order by guest.sort_order, guest.full_name) filter (where guest.id is not null), '[]'::jsonb)
  ) into result
  from public.invitations invitation
  left join public.guests guest on guest.invitation_id = invitation.id
  where invitation.id = p_invitation_id
  group by invitation.id;
  return result;
end;
$$;

grant execute on function public.get_rsvp_invitation(uuid) to anon, authenticated;
grant execute on function public.get_admin_invitation(uuid) to authenticated;
grant execute on function public.create_admin_invitation(text, jsonb, text, text) to authenticated;
grant execute on function public.update_admin_invitation(uuid, text, jsonb, text, text) to authenticated;
