var http = require('http');

var server = http.createServer(function(req, res){
	res.end('Welcome to our testing server!');
});

server.listen(8080);