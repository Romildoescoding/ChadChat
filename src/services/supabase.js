import { createClient } from "@supabase/supabase-js";

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYWFqam5vbm1sbmplYnJjaXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4ODc2ODEsImV4cCI6MjAyNzQ2MzY4MX0.0fVPjwv-D3k3k3MdgM6CWbFkbZST3usAxgKlLCUZ8JE
export const supabaseURL = "https://vnaajjnonmlnjebrciqh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYWFqam5vbm1sbmplYnJjaXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4ODc2ODEsImV4cCI6MjAyNzQ2MzY4MX0.0fVPjwv-D3k3k3MdgM6CWbFkbZST3usAxgKlLCUZ8JE";
const supabase = createClient(supabaseURL, supabaseKey);
export default supabase;
