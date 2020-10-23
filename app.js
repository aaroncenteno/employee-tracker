const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = require('./db/database');

const companyDatabaseQuestions = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'databases',
            message: 'What would you like to do?',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee's role",
                "Remove a employee",
                "Exit"
            ]
        }
    ])
    .then (function (answer) {
        switch (answer.search) {
            case "View all departments":
            // Function call
            break;

            case "View all roles":
            // Function Call
            break;

            case "View all employess":
            // Function Call
            break;

            case "Add a department":
            // Function Call
            break;

            case "Add a role":
            // Function Call
            break;

            case "Add an employee":
            // Function call
            break;

            case "Update an employee's role":
            // Function call
            break;

            case "Remove an employee":
            // Function call
            break;

            case "Exit":
            // Function Call
            break;
        }
    })
};

companyDatabaseQuestions();