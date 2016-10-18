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
      throw err;
    }
    cb(rows);
  });
  
  connection.end();
};


// exports.dbUsersPost = function(message) {
//   var connection = mysql.createConnection({
//     // host     : 'localhost',
//     user: 'root',
//     password: 'p',
//     database: 'chat'
//   });

//   connection.connect();

  
//   var prom = new Promise((resolve, reject) => {
//     connection.query('select * from users;', function(err, rows, fields) {

//       if (err) {
//         reject(err);
//       }

//       var userFound = false;
//       var users = rows;

//       for (var i = 0; i < users.length; i++) {
//         if (users[i].username === message.username) {
//           userFound = true;
//         }
//       }

//       resolve(userFound);

//     });

//   }).then(userFound => {

//     if (!userFound) {
//       userId++;
//       connection.query('insert into `users` values ("' + message.username + '",' + userId + ');', function(err, rows, fields) {
//         if (err) {
//           throw err;
//         }
//       });      
//     } 

//     connection.end();

//   });
// };


// exports.dbUsersGet = function(cb) {
//   var connection = mysql.createConnection({
//     // host     : 'localhost',
//     user: 'root',
//     password: 'p',
//     database: 'chat'
//   });

//   connection.connect();

//   connection.query('select * from users;', function(err, rows, fields) {
//     if (err) {
//       throw err;
//     }

//     cb(rows);
  
//   });

//   connection.end();

// };


// mysql -u root < server/schema.sql;