import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const supabaseUrl = Deno.env.get('SUPABASE_URL');
const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Supabase function secrets are not configured');
}

const supabase = createClient(supabaseUrl, serviceRoleKey);
const imagePathPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\/cover$/i;

Deno.serve(async (request) => {
  if (request.method !== 'GET') {
    return new Response(null, { status: 405 });
  }

  const token = new URL(request.url).searchParams.get('token');
  if (!token) {
    return new Response(null, { status: 404 });
  }

  const { data: invitation } = await supabase
    .from('invitations')
    .select('image_path')
    .eq('token', token)
    .maybeSingle();

  if (!invitation?.image_path || !imagePathPattern.test(invitation.image_path)) {
    return new Response(null, { status: 404 });
  }

  const { data: image, error } = await supabase.storage
    .from('invitation-images')
    .download(invitation.image_path);

  if (error || !image) {
    return new Response(null, { status: 404 });
  }

  return new Response(image.stream(), {
    headers: {
      'Cache-Control': 'private, max-age=300',
      'Content-Type': image.type || 'image/jpeg',
      'Referrer-Policy': 'no-referrer',
    },
  });
});
