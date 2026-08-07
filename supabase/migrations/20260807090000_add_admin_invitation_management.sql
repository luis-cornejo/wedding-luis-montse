create or replace function public.get_admin_invitation(p_invitation_id uuid)
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

  select jsonb_build_object(
    'contact_name', invitation.contact_name,
    'contact_phone', invitation.contact_phone,
    'group_name', invitation.group_name,
    'id', invitation.id,
    'submitted_at', invitation.submitted_at,
    'token', invitation.token,
    'guests', coalesce(
      jsonb_agg(
        jsonb_build_object(
          'allergy_details', guest.allergy_details,
          'attendance', guest.attendance,
          'dietary_options', guest.dietary_options,
          'full_name', guest.full_name,
          'id', guest.id,
          'notes', guest.notes
        ) order by guest.sort_order, guest.full_name
      ) filter (where guest.id is not null),
      '[]'::jsonb
    )
  )
  into result
  from public.invitations invitation
  left join public.guests guest on guest.invitation_id = invitation.id
  where invitation.id = p_invitation_id
  group by invitation.id;

  return result;
end;
$$;

create or replace function public.create_admin_invitation(
  p_group_name text,
  p_guest_names jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  created_invitation public.invitations;
  guest_count integer;
begin
  if not public.is_admin() then
    raise exception 'Unauthorized';
  end if;

  if nullif(trim(p_group_name), '') is null or jsonb_typeof(p_guest_names) <> 'array' then
    raise exception 'Invalid invitation';
  end if;

  select count(*) into guest_count
  from jsonb_array_elements_text(p_guest_names) as guest_name
  where nullif(trim(guest_name), '') is not null;

  if guest_count = 0 then
    raise exception 'An invitation must include at least one guest';
  end if;

  insert into public.invitations (group_name)
  values (trim(p_group_name))
  returning * into created_invitation;

  insert into public.guests (invitation_id, full_name, sort_order)
  select
    created_invitation.id,
    trim(guest_name.value),
    guest_name.ordinality::integer
  from jsonb_array_elements_text(p_guest_names) with ordinality as guest_name(value, ordinality)
  where nullif(trim(guest_name.value), '') is not null;

  return jsonb_build_object(
    'group_name', created_invitation.group_name,
    'id', created_invitation.id,
    'token', created_invitation.token
  );
end;
$$;

grant execute on function public.get_admin_invitation(uuid) to authenticated;
grant execute on function public.create_admin_invitation(text, jsonb) to authenticated;
