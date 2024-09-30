// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request is received it should respond with the contents of the comments.json file.

// To test your server, run it and then visit http://localhost:3000 in your web browser.

// You can use the readFileSync function from the fs module to read the contents of the comments.json file.

// 1. Create a web server that listens for incoming requests on port 3000.
// 2. When a request is received, respond with the contents of the comments.json file.

// Run the server and visit http://localhost:3000 in your web browser to see the contents of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const comments = fs.readFileSync('./comments.json', 'utf8');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(comments);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});