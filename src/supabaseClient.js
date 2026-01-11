import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cjczonwdytdhubxxwqle.supabase.co';
const supabaseKey = 'sb_publishable_OpkHjtm-kxDwrrqylh5iFA_NT37Rz9X';
/*const supabaseKey = process.env.SUPABASE_KEY;*/
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;