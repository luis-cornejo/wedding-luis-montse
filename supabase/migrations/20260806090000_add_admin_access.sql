create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

create policy "Administrators can manage invitations"
on public.invitations
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "Administrators can manage guests"
on public.guests
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

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

grant execute on function public.is_admin() to authenticated;
grant execute on function public.get_admin_rsvp_overview() to authenticated;

-- Create the administrator accounts from Supabase Dashboard > Authentication > Users,
-- then add each generated user UUID here:
-- insert into public.admin_users (user_id) values ('AUTH_USER_UUID');
