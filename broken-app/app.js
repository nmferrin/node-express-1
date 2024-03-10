const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    // Use Promise.all to wait for all promises to resolve
    let responses = await Promise.all(
      req.body.developers.map(d => axios.get(`https://api.github.com/users/${d}`))
    );

    // Construct output from resolved promises
    let out = responses.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out); // Use res.json for sending JSON responses
  } catch (err) { // Correct error variable
    return next(err); // Pass errors to Express error handler
  }
});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
