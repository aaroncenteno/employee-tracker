const mysql = require('mysql2')

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'rootroot',
    database:'company'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log('Connection to database sucessful!');
});

module.exports = connection;
