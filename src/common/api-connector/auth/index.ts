import { supabase } from '../supabase';

export async function getAdminEmail(): Promise<string | null> {
  if (!supabase) {
    return null;
  }

  const { data } = await supabase.auth.getSession();
  return data.session?.user.email ?? null;
}

export async function requestAdminLoginLink(email: string): Promise<boolean> {
  if (!supabase) {
    return false;
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${window.location.origin}/gestion`,
      shouldCreateUser: false,
    },
  });

  return !error;
}

export async function signOutAdmin(): Promise<void> {
  await supabase?.auth.signOut();
}
