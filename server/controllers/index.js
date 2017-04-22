var models = require('../models');
// CONTROLLER doesn't touch DB
// use MODEL to interact w/DB

module.exports = {
  messages: {
    get: function (req, res, next) { console.log('controller get');}, // a function which handles a get request for all messages
    post: function (req, res, next) {
      console.log('POST CONTROLLER: ', req.body);
      // var queryString = '';
      // dbConnection.query(queryString, queryArgs, function(err, results){
      //   if (err) {throw err}
      //   res.doStuff
      // });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res, cb) {

      console.log('POST CONTROLLER USER: ', req);
      req.on('end', function(){
        res.end();
      });
    }
  }
};

// dbConnection.query("SQL STUFF", thing, function(err, res){
  // if (err) {throw err}
  // res.doStuff
//})

// req.body.username/message
