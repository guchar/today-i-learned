import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jocpzixrmdxccrnltcmy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvY3B6aXhybWR4Y2Nybmx0Y215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NjM1MjcsImV4cCI6MjAzNzMzOTUyN30.NW9Q-94iOQMLfddDbPwoUMUO7oKR5Hm4AyDayp1pUl0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
