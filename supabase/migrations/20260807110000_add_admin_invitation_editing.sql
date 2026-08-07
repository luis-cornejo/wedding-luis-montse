create or replace function public.update_admin_invitation(
  p_invitation_id uuid,
  p_group_name text,
  p_guests jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  guest_count integer;
begin
  if not public.is_admin() then
    raise exception 'Unauthorized';
  end if;

  if nullif(trim(p_group_name), '') is null or jsonb_typeof(p_guests) <> 'array' then
    raise exception 'Invalid invitation';
  end if;

  select count(*) into guest_count
  from jsonb_array_elements(p_guests) as guest
  where nullif(trim(guest.value ->> 'full_name'), '') is not null;

  if guest_count = 0 then
    raise exception 'An invitation must include at least one guest';
  end if;

  if exists (
    select 1
    from jsonb_array_elements(p_guests) as guest
    where nullif(guest.value ->> 'id', '') is not null
      and not exists (
        select 1
        from public.guests existing_guest
        where existing_guest.id = (guest.value ->> 'id')::uuid
          and existing_guest.invitation_id = p_invitation_id
      )
  ) then
    raise exception 'Invalid guest';
  end if;

  update public.invitations
  set group_name = trim(p_group_name), updated_at = now()
  where id = p_invitation_id;

  update public.guests existing_guest
  set
    full_name = trim(guest.value ->> 'full_name'),
    sort_order = guest.ordinality::integer,
    updated_at = now()
  from jsonb_array_elements(p_guests) with ordinality as guest(value, ordinality)
  where nullif(guest.value ->> 'id', '') is not null
    and existing_guest.id = (guest.value ->> 'id')::uuid
    and existing_guest.invitation_id = p_invitation_id;

  insert into public.guests (invitation_id, full_name, sort_order)
  select
    p_invitation_id,
    trim(guest.value ->> 'full_name'),
    guest.ordinality::integer
  from jsonb_array_elements(p_guests) with ordinality as guest(value, ordinality)
  where nullif(guest.value ->> 'id', '') is null
    and nullif(trim(guest.value ->> 'full_name'), '') is not null;

  delete from public.guests existing_guest
  where existing_guest.invitation_id = p_invitation_id
    and not exists (
      select 1
      from jsonb_array_elements(p_guests) as guest
      where nullif(guest.value ->> 'id', '') is not null
        and existing_guest.id = (guest.value ->> 'id')::uuid
    );
end;
$$;

grant execute on function public.update_admin_invitation(uuid, text, jsonb) to authenticated;
