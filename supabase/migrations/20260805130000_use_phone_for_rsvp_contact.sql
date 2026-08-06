alter table public.invitations add column if not exists contact_phone text;

create or replace function public.get_rsvp_invitation(p_token uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  result jsonb;
begin
  select jsonb_build_object(
    'group_name', invitation.group_name,
    'contact_name', invitation.contact_name,
    'contact_phone', invitation.contact_phone,
    'submitted_at', invitation.submitted_at,
    'guests', coalesce(
      jsonb_agg(
        jsonb_build_object(
          'id', guest.id,
          'full_name', guest.full_name,
          'attendance', guest.attendance,
          'dietary_options', guest.dietary_options,
          'allergy_details', guest.allergy_details,
          'notes', guest.notes
        ) order by guest.sort_order, guest.full_name
      ) filter (where guest.id is not null),
      '[]'::jsonb
    )
  )
  into result
  from public.invitations invitation
  left join public.guests guest on guest.invitation_id = invitation.id
  where invitation.token = p_token
  group by invitation.id;

  return result;
end;
$$;

drop function if exists public.submit_rsvp_invitation(uuid, text, text, jsonb);

create function public.submit_rsvp_invitation(
  p_token uuid,
  p_contact_name text,
  p_contact_phone text,
  p_guests jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  invitation_uuid uuid;
  expected_guest_count integer;
  submitted_guest_count integer;
begin
  if jsonb_typeof(p_guests) <> 'array' then
    raise exception 'Invalid guest response';
  end if;

  select id into invitation_uuid
  from public.invitations
  where token = p_token;

  if invitation_uuid is null then
    raise exception 'Invitation not found';
  end if;

  select count(*) into expected_guest_count
  from public.guests
  where invitation_id = invitation_uuid;

  select count(distinct (guest_response.value ->> 'id')::uuid) into submitted_guest_count
  from jsonb_array_elements(p_guests) as guest_response(value);

  if submitted_guest_count <> expected_guest_count
    or exists (
      select 1
      from jsonb_array_elements(p_guests) as guest_response(value)
      left join public.guests guest
        on guest.id = (guest_response.value ->> 'id')::uuid
        and guest.invitation_id = invitation_uuid
      where guest.id is null
        or (guest_response.value ->> 'attendance') not in ('attending', 'declined')
    ) then
    raise exception 'Invalid guest response';
  end if;

  update public.guests guest
  set
    attendance = (guest_response.value ->> 'attendance')::public.attendance_status,
    dietary_options = coalesce(
      array(select jsonb_array_elements_text(guest_response.value -> 'dietary_options')),
      '{}'
    ),
    allergy_details = nullif(trim(guest_response.value ->> 'allergy_details'), ''),
    notes = nullif(trim(guest_response.value ->> 'notes'), ''),
    updated_at = now()
  from jsonb_array_elements(p_guests) as guest_response(value)
  where guest.id = (guest_response.value ->> 'id')::uuid
    and guest.invitation_id = invitation_uuid;

  update public.invitations
  set
    contact_name = nullif(trim(p_contact_name), ''),
    contact_phone = nullif(trim(p_contact_phone), ''),
    submitted_at = now(),
    updated_at = now()
  where id = invitation_uuid;
end;
$$;

grant execute on function public.get_rsvp_invitation(uuid) to anon, authenticated;
grant execute on function public.submit_rsvp_invitation(uuid, text, text, jsonb) to anon, authenticated;
