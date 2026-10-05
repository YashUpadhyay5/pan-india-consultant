import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vlmymxxztiyrnzcqurbc.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_26xLgjdjJFUi64iPb7jYXw_LD9cj86q';

export const supabase = createClient(supabaseUrl, supabaseKey);
