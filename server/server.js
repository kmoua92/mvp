var http = require('http');
var db = require('../db/index');

var headers = {
	'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept'
};


var requestHandler = function(req, res) {
	if (req.method === 'GET') {
		if (req.url === '/players') {
			db.dbPlayersGet(function(players) {
				console.log('=======', players)
				players = JSON.stringify(players);
				res.writeHead(200, headers);
				res.end(players);
			});
		}

		

		// res.writeHead(200, headers);
		// res.end('GET request received and handled');
	}

	if (req.method === 'POST') {

		if (req.url === '/stats') {
			req.on('data', function(data){
				playerName = JSON.parse(data);

				db.dbStatsPost(playerName, function(dbData){

					var stats  = JSON.stringify(dbData);

					if (dbData.length === 0) {
						res.writeHead(404, headers);
						res.end('Player not found');
					} else {
						res.writeHead(200, headers);
						res.end(stats);
					}
				});
			});
		}

		// res.writeHead(200, headers);
		// res.end('POST request received and handled');
	}

};



var server = http.createServer(requestHandler);
server.listen(3000);
console.log('Server listening on port 3000...');

db.dbInit();

module.exports = server;