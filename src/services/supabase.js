import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://pjoxljefctmxekvudtuu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqb3hsamVmY3RteGVrdnVkdHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNTMxMjMsImV4cCI6MjA0MTYyOTEyM30.wmm9fMfB4v5fGpJZP1O_jRLNJtWu8gNWmvZxH8VIWNw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
