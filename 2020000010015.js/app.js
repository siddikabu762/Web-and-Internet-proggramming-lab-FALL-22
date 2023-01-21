//const server = require("./http-module");
const http = require('http')

const server = http.createServer((req, res) => {
        if (req.url == "/") {
            res.write("<h1>Base url</h1>");
            res.end();
        }
        else if (req.url == "/home"){
            res.write("<h1>Home page</h1>");
            res.end();
        }
        else {
            res.write("<h1>This does not exist</h1> <br> <a href = '/'>Go to base</a>");
            res.end();
        }
    
    });

server.listen(7777)
