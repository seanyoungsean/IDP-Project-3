var mysql = require('mysql');
var config = require('../config');

var connection = mysql.createConnection(config.db);

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected!');
});

module.exports = connection;