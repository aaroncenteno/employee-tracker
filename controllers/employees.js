const connection = require('./database');

function getEmployees() {
    return connection.promise().query("SELECT * FROM employees");
};

module.exports = {
    getEmployees
}