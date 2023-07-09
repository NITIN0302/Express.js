 const http = require('http');
 const fs = require('fs');

 const homepage = fs.readFileSync('./content/index.html')

 const server = http.createServer((req,res) => 
 {
     res.writeHead(200,{'content-type':'text/html'});
     res.write(homepage);
     res.end();
 })
 
 server.listen(5000);