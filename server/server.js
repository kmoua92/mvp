var http = require('http');
var db = require('../db/index');
var path = require('path');
var express = require('express');
var url = require('url');

var app = express();

app.use(express.static('client/app'));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});

// app.get('/', function (req, res) {
// 	console.log('======================================================')
// 	res.sendFile(__dirname + 'client/assets/index.html');
// });

app.get('/players', function (req, res) {

	db.dbPlayersGet(function(players) {
				
		players = JSON.stringify(players);
			
		// res.setHeaders(header-s);
		res.status(200).send(players);
	});

});

app.get('/stats/*', function (req, res) {
  var urlParts = url.parse(req.url, true);
  var playerName = urlParts.query.player.split('-').join(' ');
  // query database
    // stringify data before sending back to client
});


app.listen(3000, function () {
  console.log('Listening to port 3000...');
});

db.dbInit();

// // var requestHandler = function(req, res) {
// 	if (req.method === 'GET') {
// 		if (req.url === '/players') {
// 			db.dbPlayersGet(function(players) {
// 				console.log('=======', players)
// 				players = JSON.stringify(players);
// 				res.writeHead(200, headers);
// 				res.end(players);
// 			});
// 		}

		

// 		// res.writeHead(200, headers);
// 		// res.end('GET request received and handled');
// 	}

// 	if (req.method === 'POST') {

// 		if (req.url === '/stats/player') {
// 			req.on('data', function(data){
// 				playerName = JSON.parse(data);

// 				db.dbPlayerPost(playerName, function(dbData){

// 					var stats  = JSON.stringify(dbData);

// 					if (dbData.length === 0) {
// 						res.writeHead(404, headers);
// 						res.end('Player not found');
// 					} else {
// 						res.writeHead(200, headers);
// 						res.end(stats);
// 					}
// 				});
// 			});
// 		}

// 		if (req.url === '/stats/team') {
// 			req.on('data', function(data){
// 				teamName = JSON.parse(data);

// 				db.dbTeamPost(teamName, function(dbData){

// 					var stats  = JSON.stringify(dbData);

// 					if (dbData.length === 0) {
// 						res.writeHead(404, headers);
// 						res.end('Player not found');
// 					} else {
// 						res.writeHead(200, headers);
// 						res.end(stats);
// 					}
// 				});
// 			});
// 		}
// 		// res.writeHead(200, headers);
// 		// res.end('POST request received and handled');
// 	}

// };



// var server = http.createServer(requestHandler);
// server.listen(3000);
// console.log('Server listening on port 3000...');


// module.exports = server;