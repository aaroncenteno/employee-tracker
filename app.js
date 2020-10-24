const inquirer = require('inquirer');
// const cTable = require('console.table');

const connection = require('./db/database');

const companyDatabaseQuestions = exports.companyDatabaseQuestions =  function() {
    inquirer
    .prompt({
            type: 'list',
            name: 'databaseQuestions',
            message: 'What would you like to do?',
            choices: [
                {
                    name: "View all departments",
                    value: "viewAllDepartments"
                },
                {
                    name: "View all roles",
                    value: "viewAllRoles"
                },
                {
                    name: "View all employees",
                    value: "viewAllEmployees"
                },
                {
                    name: "Add a department",
                    value: "addADepartment"
                },
                {
                    name: "Add a role",
                    value: "addARole"
                },
                {
                    name: "Add an employee",
                    value: "addAnEmployee"
                },
                {
                    name: "Update an employee's role",
                    value: "UpdateEmployeeRole"
                },
                {
                    name: "Remove a employee",
                    value: "removeEmployee"
                },
                {
                    name: "Exit",
                    value: "Exit"
                }
            ]
        }).then (function (choice) {
        switch (choice.databaseQuestions) {
            // case "viewAllDepartments":
            // // Function call
            // retrun viewAllDepartments();
            // break;

            case "viewAllRoles":
            // Function Call
            return viewAllRoles();

            case "viewAllEmployees":
            // Function Call
            return viewAllEmployees();

            // case "Add a department":
            // // Function Call
            // break;

            case "addARole":
            // Function Call
            return addARole();

            // case "Add an employee":
            // // Function call
            // break;

            // case "Update an employee's role":
            // // Function call
            // break;

            // case "Remove an employee":
            // // Function call
            // break;

            default: return connection.end();
        }
    }).catch((error) => {console.log(error)});
};

companyDatabaseQuestions();

// Require Constants At bottom of file due to circular dependency.
const 
{
    viewAllRoles,
    addARole
}               =  require('./controllers/roles');

const 
{ 
    viewAllEmployees
}               = require('./controllers/employees');
