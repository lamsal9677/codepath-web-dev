import { createClient } from '@supabase/supabase-js';
const URL = 'https://vtlcwibfgtumlcrajpcc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bGN3aWJmZ3R1bWxjcmFqcGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEwMTU4NTMsImV4cCI6MjAwNjU5MTg1M30.tzv_Cmd0QRvkl5b5i5NMWapZiv4AWnK9-HHHMONONrs';
const supabase = createClient(URL, API_KEY);
export default supabase;