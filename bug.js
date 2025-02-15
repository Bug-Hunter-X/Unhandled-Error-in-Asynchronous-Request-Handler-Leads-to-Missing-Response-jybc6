const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    if (Math.random() < 0.5) {
      // Simulate a successful response
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    } else {
      // Simulate an error (e.g., database error)
      // Notice: Without proper error handling, the response is never sent.
      console.error('Simulated database error');
    }
  }, 1000); // Simulate some delay
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});