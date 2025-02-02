const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    const newPort = port + 1; 
    console.log(`Port ${port} in use, trying port ${newPort}`);
    server.listen(newPort);
  } else {
    console.error(err);
  }
};

server.on('error', onError);

startServer();