const http = require('http');
var state = 10;
//create a server object:
http.createServer(function (req, res) {
    console.log(req.method, req.url);
    if(req.url === '/'){
    res.write(state , 'Hello from my first http server!'); //write a response to the client //end the response 
    }if(req.url === '/add'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(state++);
    }
    if(req.url === '/revome'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(state--);
    }
    if(req.url === '/reset'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        state = 10;
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("Error 404 : Endpoint not found. Please try again.");
    }
    res.end();

}).listen(8080);
console.log('it still running');
