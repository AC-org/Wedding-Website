import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ligyyhhxuvbnvyfnurpi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZ3l5aGh4dXZibnZ5Zm51cnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1OTUyNzAsImV4cCI6MjA0MDE3MTI3MH0.qTcTEt4ZKtCR6EYYTXwiFk2rvNCJPTBxCX20E5OVnXU';
/*const supabaseKey = process.env.SUPABASE_KEY;*/
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;