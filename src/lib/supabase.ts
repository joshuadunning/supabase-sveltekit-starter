import { createClient } from "@supabase/auth-helpers-sveltekit";

// const supabaseUrl = env.PUBLIC_SUPABASE_URL || ''
// const supabaseAnonKey = env.PUBLIC_SUPABASE_ANON_KEY || ''
const supabaseUrl = "http://localhost:54321/";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
