import { supabase } from "../supabaseClient";

const SUPABASE_URL = process.env.local.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.local.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("Les variables d'environnement Supabase ne sont pas définies !");
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
