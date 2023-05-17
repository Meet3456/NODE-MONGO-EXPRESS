const express = require('express');
const app = express();

// Route: /
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route: /books
app.get('/books', (req, res) => {
  res.send('Here are some book recommendations!');
});

// Start the server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});
