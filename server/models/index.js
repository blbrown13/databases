var db = require('../db');
// MODEL interacts w/DB

module.exports = {
  messages: {
    get: function () { console.log('model get');}, // a function which produces all the messages
    post: function (req, res, cb) {
      console.log('POST MODEL: ', req);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (req, res, cb) {
      console.log('POST MODEL USER: ', req);
      db.dbConnection.query("SQL STUFF", thing, function(err, res){
        if (err) {throw err}
        cb();
      });
      req.on('end', function(){
        res.end();
      });
    }
  }
};

// dbConnection.query("SQL STUFF", thing, function(err, res){
//   if (err) {throw err}
//   res.doStuff
// })
