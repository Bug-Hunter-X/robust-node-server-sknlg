const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    // ... some code that might throw an error ...
    //Example of code that might throw an error
    const data = JSON.parse('{invalid json}');
  } catch (error) {
    console.error('Error:', error);
    res.statusCode = error.code === 'ENOENT' ? 404 : 500;
    res.end(error.code === 'ENOENT' ? 'Not Found' : 'Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
//To make this error throw, you must uncomment the line that causes the error.
//const data = JSON.parse('{invalid json}');