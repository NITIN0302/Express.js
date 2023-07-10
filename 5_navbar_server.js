const http = require('http');
const fs = require('fs');

const homepage = fs.readFileSync('./5_navbar-app/index.html');
const logo = fs.readFileSync('./5_navbar-app/logo.svg');
const homestyle = fs.readFileSync('./5_navbar-app/styles.css');
const apps = fs.readFileSync('./5_navbar-app/browser-app.js');

const server = http.createServer((req,res) => {
    url = req.url;
    if(url === '/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homepage);
        res.end();
    }
    else if(url === '/styles.css')
    {
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homestyle);
        res.end();
    }
    else if(url === '/logo.svg')
    {
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(logo);
        res.end();
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/js'});
        res.write(apps);
        res.end();
    }
})

server.listen(5000);