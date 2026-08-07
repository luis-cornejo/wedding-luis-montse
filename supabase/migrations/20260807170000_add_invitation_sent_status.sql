alter table public.invitations
add column invitation_sent_at timestamptz;

create or replace function public.get_admin_rsvp_overview()
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
    'totals', jsonb_build_object(
      'attending', count(*) filter (where attendance = 'attending'),
      'declined', count(*) filter (where attendance = 'declined'),
      'pending', count(*) filter (where attendance = 'pending'),
      'total', count(*)
    ),
    'invitations', coalesce(
      (
        select jsonb_agg(
          jsonb_build_object(
            'group_name', invitation.group_name,
            'guest_count', invitation_stats.guest_count,
            'has_submitted', invitation.submitted_at is not null,
            'id', invitation.id,
            'is_sent', invitation.invitation_sent_at is not null,
            'updated_at', invitation.updated_at
          ) order by invitation.group_name
        )
        from public.invitations invitation
        cross join lateral (
          select count(*)::integer as guest_count
          from public.guests guest
          where guest.invitation_id = invitation.id
        ) invitation_stats
      ),
      '[]'::jsonb
    )
  )
  into result
  from public.guests;

  return result;
end;
$$;

create function public.set_admin_invitation_sent(p_invitation_id uuid, p_is_sent boolean)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'Unauthorized';
  end if;

  update public.invitations
  set
    invitation_sent_at = case when p_is_sent then now() else null end,
    updated_at = now()
  where id = p_invitation_id;

  if not found then
    raise exception 'Invitation not found';
  end if;
end;
$$;

grant execute on function public.get_admin_rsvp_overview() to authenticated;
grant execute on function public.set_admin_invitation_sent(uuid, boolean) to authenticated;
