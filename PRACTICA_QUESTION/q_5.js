const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');

  // Send the HTML form as the response
  res.end(`
    <html>
    <head>
      <title>HTML Form Example</title>
    </head>
    <body>
      <h2>HTML Form </h2>
      <form method="POST" action="/submit">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <input type="submit" value="Submit">
      </form>
    </body>
    </html>
  `);
});

// Start the server and listen on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running on http://localhost:3000');
});
