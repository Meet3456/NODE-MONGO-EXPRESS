const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Route: /
app.get('/', (req, res) => {
  const form = `
    <form method="POST" action="/submit">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" required>
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `;
  res.send(form);   //jab url hit hoga toh response(res) me form send karenge
});

// Route: /submit
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`You submitted: ${name} and You submitted: ${email}`);

});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
