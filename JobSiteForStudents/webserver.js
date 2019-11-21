// load module http
const http = require('http');
const app = require('./serverside/app');
// create new instance of http.server
const server = http.createServer(app);
server.listen(process.env.PORT || 8000);
console.log('Server running on port 8000');

