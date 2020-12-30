// Creating a Server on Port Number 3001
const http = require('http');
const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
   res.write('Hello world');
   res.end();
});
server.listen(3001);