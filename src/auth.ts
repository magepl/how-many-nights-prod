import { supabase } from "../libs/supabase";

// sign up
async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
}

// sign in
async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

// sign out
async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}
