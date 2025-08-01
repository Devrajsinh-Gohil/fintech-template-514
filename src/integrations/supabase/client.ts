// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jjuourksaqsvxmeifxwa.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqdW91cmtzYXFzdnhtZWlmeHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzY3MzIsImV4cCI6MjA2OTAxMjczMn0.b-xA3sVsnNl4Ai01qeykUFcRxGgHfbAr2X3fgI0cM9Q";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});