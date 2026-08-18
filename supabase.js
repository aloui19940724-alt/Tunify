const SUPABASE_URL = "https://qbrbmkuazanubqmhjhlh.supabase.co";

const SUPABASE_ANON_KEY =
"ضع_مفتاح_Anon_هنا";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
