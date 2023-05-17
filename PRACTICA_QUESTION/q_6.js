const http = require("http");

const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { "Content-Type": "text/html" });

  // Create the HTML table
  const table = `
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>John Doe</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>30</td>
      </tr>
    </table>
  `;

  // Send the HTML table as the response
  res.end(table);
});

// Start the server and listen on port 3000
server.listen(3000, "localhost", () => {
  console.log("Server running on http://localhost:3000");
});
