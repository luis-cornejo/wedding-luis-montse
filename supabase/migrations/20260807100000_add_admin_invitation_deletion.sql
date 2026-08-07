create or replace function public.delete_admin_invitation(p_invitation_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then
    raise exception 'Unauthorized';
  end if;

  delete from public.invitations
  where id = p_invitation_id;
end;
$$;

grant execute on function public.delete_admin_invitation(uuid) to authenticated;
