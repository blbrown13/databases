// MODEL only interfaces with DB
  // answers only to CONTROLLER

var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM messages', function(err, results) {
        cb(err, results);
      });
    }, // a function which produces all the messages
    post: function (parameters, cb) {
      var dbString = 'INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)';
      db.query(dbString, parameters, function(err, results) {
        cb(err, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT * FROM users', function(err, results) {
        cb(err, results);
      });
    },
    post: function (parameters, cb) {
      var dbString = 'INSERT INTO users (username) VALUES (?)';
      db.query(dbString, parameters, function(err, results) {
        cb(err, results);
      });
    }
  }
};
