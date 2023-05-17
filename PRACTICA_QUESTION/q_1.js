const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.setHeader("Content-Type", "text/html");
    resp.end("<h2>Welcome to the Server!</h2>");
  } else if (req.url === "/text") {
    resp.end("This is a plane text response");
  } else {
    resp.statusCode = 404;
    resp.end("404 Not found");
  }
});

// Start the server and listen on port 3000
server.listen(3000, "localhost", () => {
  console.log("Server running on http://localhost:3000");
});
