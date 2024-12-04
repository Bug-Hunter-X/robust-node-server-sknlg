const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // ... some code that might throw an error ...
  } catch (error) {
    console.error('Error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});