import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://pjoxljefctmxekvudtuu.supabase.co";
export const supabaseUrl = "https://uhsaxmtcflukdxpgqowo.supabase.co";

// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqb3hsamVmY3RteGVrdnVkdHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNTMxMjMsImV4cCI6MjA0MTYyOTEyM30.wmm9fMfB4v5fGpJZP1O_jRLNJtWu8gNWmvZxH8VIWNw";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoc2F4bXRjZmx1a2R4cGdxb3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MTY4NjQsImV4cCI6MjA5NTA5Mjg2NH0._rEhaKgh7xyx-GdhMISKFtVxZx_GG6MNYdMtGHTPEo8";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
