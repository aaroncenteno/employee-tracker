const connection = require('../db/database');

function getDepartments() {
    return connection.promise().query("SELECT * FROM departments");
};

module.exports = {
    getDepartments
};