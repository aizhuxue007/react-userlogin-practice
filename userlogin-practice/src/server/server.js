const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 3000; // Set your desired port number

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Initialize Supabase client
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_PUBLIC_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint for user sign-in
app.post('/api/signin', async (req, res) => {
  const { email } = req.body;

  try {
    // Sign-in the user using Supabase's built-in authentication method
    const { user, error } = await supabase.auth.signIn({
      email
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    // Sign-in successful, return user data
    return res.status(200).json({ user });
  } catch (error) {
    console.error('Sign-in failed:', error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});