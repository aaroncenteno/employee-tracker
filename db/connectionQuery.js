const connection = require('./database');

function getRoles() {
    return connection.promise().query("SELECT * FROM roles");
};

function getEmployees() {
    return connection.promise().query("SELECT * FROM employees");
};

function getDepartments() {
    return connection.promise().query("SELECT * FROM departments");
};

module.exports = {
    getRoles,
    getEmployees,
    getDepartments
};

