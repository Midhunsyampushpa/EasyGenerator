const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8084;

const server = http.createServer((req, res) => {
  let filePath = './task.html';
  let contentType = 'text/html';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.write(content);
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
