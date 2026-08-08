create function public.clear_admin_invitation_image(p_invitation_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then raise exception 'Unauthorized'; end if;

  delete from storage.objects
  where bucket_id = 'invitation-images'
    and name = p_invitation_id::text || '/cover';

  update public.invitations
  set image_path = null, updated_at = now()
  where id = p_invitation_id;

  if not found then raise exception 'Invitation not found'; end if;
end;
$$;

grant execute on function public.clear_admin_invitation_image(uuid) to authenticated;
