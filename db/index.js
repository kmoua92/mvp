var mysql = require('mysql');
var playerId = 0;
var teamId = 0;
var userId = 0;


// fetch all players from database
exports.dbInit = function() {
  // any queries need to be made on server startup
};


exports.dbUserPost = function(user, cb) {
  var connection = mysql.createConnection({
    user: 'root',
    password: 'p',
    database: 'mvp'
  });

  connection.connect();
  userId++;

  connection.query('insert into `users` values (' + userId + ', "' + user.username + '", "' + user.password + ');', function(err, rows, fields) {
    if (err) {
      throw err;
    }
  });

  connection.end();

};

exports.dbUserGet = function(user, cb) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user: 'root',
    password: 'p',
    database: 'mvp'
  });

  connection.connect();

  connection.query('select username from users where username = "' + user.username + '";', function(err, rows, fields) {
    if (err) {
      throw err;
    }
    cb(rows);
  });
  
  connection.end();
};


exports.dbPlayersGet = function(cb) {
  var connection = mysql.createConnection({
    // host     : 'localhost',
    user: 'root',
    password: 'p',
    database: 'mvp'
  });

  connection.connect();

  connection.query('select * from players;', function(err, rows, fields) {
    if (err) {
      cb(err);
    }
    cb(rows);
  });
  
  connection.end();
};

exports.dbPlayerPost = function(playerName, cb) {
  var connection = mysql.createConnection({
    user: 'root',
    password: 'p',
    database: 'mvp'
  });

  connection.connect();

  connection.query('select * from stats inner join players where players.playerId = stats.playerId && players.name = "' + playerName + '";', 
    function(err, rows, fields) {
    if (err) {
      cb(err);
    }
    cb(rows);
  });
  
  connection.end();
};

exports.dbTeamPost = function(teamName, cb) {
  var connection = mysql.createConnection({
    user: 'root',
    password: 'p',
    database: 'mvp'
  });

  connection.connect();

  connection.query('select * from stats inner join teams where teams.teamId = stats.teamId && teams.name = "' + teamName + '";', 
    function(err, rows, fields) {
    if (err) {
      cb(err);
    }
    cb(rows);
  });
  
  connection.end();
};


// mysql -u root < server/schema.sql;