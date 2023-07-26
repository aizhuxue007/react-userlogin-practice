import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createClient} from '@supabase/supabase-js'
import './index.css'

const supabaseURL = "https://vgigltsnmhcxllawoozp.supabase.co"
const supabaseKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnaWdsdHNubWhjeGxsYXdvb3pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk4NzA3OTYsImV4cCI6MjAwNTQ0Njc5Nn0.wmh_PVPtPxEuxYwGbmeN-gRWhXUTGR9Koh_9f5PN3Kk"
export const supabase = createClient(supabaseURL, supabaseKEY)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
