const http = require('http');
const routes = require('./routes.js');

//first way
//const server = http.createServer(routes);

//second way
console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);