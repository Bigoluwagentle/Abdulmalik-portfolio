import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xbbjpbmoenfxhlomkyym.supabase.co";
const supabaseAnonKey  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYmpwYm1vZW5meGhsb21reXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjY0NTIsImV4cCI6MjA3ODEwMjQ1Mn0.QI6VVpBy_Hzs1cm-XVEwR7IP9-9MgXp5RXwoPwdXM2U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
