create or replace function public.delete_admin_invitation(p_invitation_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then raise exception 'Unauthorized'; end if;

  delete from public.invitations
  where id = p_invitation_id;
end;
$$;

create or replace function public.clear_admin_invitation_image(p_invitation_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then raise exception 'Unauthorized'; end if;

  update public.invitations
  set image_path = null, updated_at = now()
  where id = p_invitation_id;

  if not found then raise exception 'Invitation not found'; end if;
end;
$$;
