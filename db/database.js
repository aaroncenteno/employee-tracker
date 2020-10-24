const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'rootroot',
    database:'company_tracker'
});

connection.connect(err => {
    if(err) throw err;
    console.log('Connection to database sucessful!');
});

module.exports = connection;
