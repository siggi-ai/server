const http = require('http');

const HOST = 'localhost';
const PORT = 8000;

const requestHandler = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    response.write('Hallo Welt');
    response.end();
};

const server = http.createServer(requestHandler);

server.listen(PORT, HOST, () => {
    console.log(`Webserver running on Port: http://${HOST}:${PORT}`)
});