const http = require('http');

const server = http.createServer((req,res) => {
    console.log("User hit the Server");
})

server.listen(5000);