var http = require('http');
var db = require('../db/index');

var headers = {
	'Content-Type': 'application/json'
};


var requestHandler = function(req, res) {
	if (req.method === 'GET') {
		res.writeHead(200, headers);
		res.end('GET request received and handled');
	}

	if (req.method === 'POST') {
		res.writeHead(200, headers);
		res.end('POST request received and handled');
	}

};













var server = http.createServer(requestHandler);
server.listen(3000);

db.dbInit();

module.exports = server;