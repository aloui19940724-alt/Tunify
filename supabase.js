const SUPABASE_URL = "https://qbrbmkuazanubqmhjhlh.supabase.co";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicmJta3VhemFudWJxbWhqaGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwODI2MDgsImV4cCI6MjEwMjY1ODYwOH0.Wwv9XfyYHH9jm5yhtRjlpZaIV0wUJr9rPt5CCj7CyBE";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
