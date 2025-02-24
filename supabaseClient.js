import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ifjsanrexejllakmuvxx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmanNhbnJleGVqbGxha211dnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMjM0MDMsImV4cCI6MjA1NTg5OTQwM30.CzH4nFNY4RPZhLYkdzFP-PWVR0SztYGCpndoB4-5UOE';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default supabase;


