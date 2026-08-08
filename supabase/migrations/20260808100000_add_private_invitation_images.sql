alter table public.invitations
add column image_path text;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'invitation-images',
  'invitation-images',
  false,
  5242880,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = false,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Administrators can read invitation images"
on storage.objects for select to authenticated
using (bucket_id = 'invitation-images' and public.is_admin());

create policy "Administrators can upload invitation images"
on storage.objects for insert to authenticated
with check (bucket_id = 'invitation-images' and public.is_admin());

create policy "Administrators can update invitation images"
on storage.objects for update to authenticated
using (bucket_id = 'invitation-images' and public.is_admin())
with check (bucket_id = 'invitation-images' and public.is_admin());

create policy "Administrators can delete invitation images"
on storage.objects for delete to authenticated
using (bucket_id = 'invitation-images' and public.is_admin());

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
    'has_image', invitation.image_path is not null,
    'locale', invitation.locale,
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

create or replace function public.get_admin_invitation(p_invitation_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  result jsonb;
begin
  if not public.is_admin() then raise exception 'Unauthorized'; end if;

  select jsonb_build_object(
    'contact_name', invitation.contact_name,
    'contact_phone', invitation.contact_phone,
    'group_name', invitation.group_name,
    'id', invitation.id,
    'image_path', invitation.image_path,
    'locale', invitation.locale,
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

create function public.set_admin_invitation_image(p_invitation_id uuid, p_image_path text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.is_admin() then raise exception 'Unauthorized'; end if;

  if p_image_path <> (p_invitation_id::text || '/cover') then
    raise exception 'Invalid image path';
  end if;

  update public.invitations
  set image_path = p_image_path, updated_at = now()
  where id = p_invitation_id;

  if not found then raise exception 'Invitation not found'; end if;
end;
$$;

create or replace function public.delete_admin_invitation(p_invitation_id uuid)
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

  delete from public.invitations
  where id = p_invitation_id;
end;
$$;

grant execute on function public.get_rsvp_invitation(uuid) to anon, authenticated;
grant execute on function public.get_admin_invitation(uuid) to authenticated;
grant execute on function public.set_admin_invitation_image(uuid, text) to authenticated;
grant execute on function public.delete_admin_invitation(uuid) to authenticated;
