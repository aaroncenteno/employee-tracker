const connection = require('../db/database');
const cTable = require('console.table');
const inquirer = require('inquirer');

const  { getDepartments }  = require('./departments');
const { companyDatabaseQuestions } = require('../app');

function getEmployees() {
    return connection.promise().query("SELECT * FROM employees");
};

function viewAllEmployees() {
    const query = connection.query(`SELECT e1.id, e1.first_name, e1.last_name, roles.title as role, departments.name 
                                    AS department, roles.salary, Concat(e2.first_name, ' ', e2.last_name) 
                                    AS manager 
                                    FROM employees e1 
                                    LEFT JOIN roles 
                                    ON e1.role_id = roles.id 
                                    LEFT JOIN departments 
                                    ON roles.department_id = departments.id 
                                    LEFT JOIN employees e2 
                                    ON e2.id = e1.manager_id`, 
    function (err, res) {
        if (err) throw err
        console.log ("\n All Employees \n");
        console.table(res);
        companyDatabaseQuestions();
    });
};

module.exports = {
    getEmployees,
    viewAllEmployees
}