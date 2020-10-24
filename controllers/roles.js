const connection = require('../db/database');
const cTable = require('console.table');
const inquirer = require('inquirer');

const  { getDepartments }  = require('./departments');
const { companyDatabaseQuestions } = require('../app');

function getRoles() {
    return connection.promise().query("SELECT * FROM roles");
};

function viewAllRoles() {
    const query = connection.query(`SELECT roles.id, roles.title, roles.salary, departments.name as department 
                                    FROM roles 
                                    JOIN departments 
                                    ON roles.department_id = departments.id
                                    ORDER BY id`,
    function (err, res) {
        if (err) throw err;
        console.log("\n Company Roles \n");
        console.table(res);
        companyDatabaseQuestions();
    }); 
};

function addARole() {
    getDepartments()
    .then((rows) => {
        let departmentNamesArr = [];
        let departmentArray = rows[0];
        for (let i = 0; i < departmentArray.length; i++) {
            let department = departmentArray[i].name;
            departmentNamesArr.push(department)
        };

        inquirer
        .prompt([
            {
                // Ask for roles title
                type: 'input',
                name: 'roleName',
                message: 'Enter the name of the role: '
            },
            {
                // Ask what the salary is
                type: 'number',
                name: 'salary',
                message: 'Enter the salary for this position: '
            },
            {
                // Ask what department the role will be in
                type: 'list',
                name: 'department',
                message: 'Enter the department of this role: ',
                choices: departmentNamesArr
            }])
            .then((response) => {
            let departmentID
            for (let i=0; i < departmentArray.length; i++) {
                if (response.department === departmentArray[i].name) {
                  departmentID = departmentArray[i].id;
                  break
                };
            };
    
            // Added role to role table
            connection.query('INSERT INTO roles SET ?',
              {
                title: response.roleName,
                salary: response.salary,
                department_id: departmentID
              },
              function(err, res) {
                if (err) throw err;
                console.log(response.roleName + ' added to company roles!\n');
                companyDatabaseQuestions();
              });
        });
    });
};

module.exports = { 
    getRoles,
    viewAllRoles,
    addARole
};
