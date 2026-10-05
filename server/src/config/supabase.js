import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || 'https://vlmymxxztiyrnzcqurbc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'sb_publishable_26xLgjdjJFUi64iPb7jYXw_LD9cj86q';

export const supabase = createClient(supabaseUrl, supabaseKey);
