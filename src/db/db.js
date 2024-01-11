import { createClient } from "@supabase/supabase-js";
const db =  createClient(   "https://giufogbsmzcnyrajtwko.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpdWZvZ2JzbXpjbnlyYWp0d2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMjg2NjcsImV4cCI6MjAxNjkwNDY2N30.QJ1H64dC_FFfHiImdZtnrTtg8s8oPMQ2OoRI0k0y7xM");

export async  function getAllProjects(){
    const data =await  db.from("r3f").select();
    return data

}

