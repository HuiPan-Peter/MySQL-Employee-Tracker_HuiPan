const retrieveDepartments = require('./retrieveDepartments');
const retrieveRole = require('./retrieveRole');
const retrieveEmployee = require('./retrieveEmployee');

// Inquirer prompts 

const prompts = [
    // select a Task to execute
    {
        name: 'task',
        type: 'list',
        message: 'SELECT TASK:',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'EXIT']
    },

    // Adding a new department Task
    {
        name: "department",
        type: "input",
        message: "ENTER NEW DEPARTMENT NAME:",
        when: (response) => {
            if (response.task === 'Add a department') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },

    //Adding a new role Task
    {
        name: "roleTitle",
        type: "input",
        message: "ENTER NEW ROLE TITLE:",
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
    {
        name: "roleSalary",
        type: "input",
        message: "ENTER ROLE SALARY:",
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
    {
        name: "roleDepartment",
        type: "list",
        message: "SELECT ROLE DEPARTMENT:",
        // invoke retrieveDepartments() function to retrive current departments in employee_db
        choices: retrieveDepartments,
        when: (response) => {
            if (response.task === 'Add a role') {
                return true;
            } 
            return false;
        }
    },

    // Adding a new employee to database
    {
        name: "employeeFirstName",
        type: "input",
        message: "ENTER FIRST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
    {
        name: "employeeLastName",
        type: "input",
        message: "ENTER LAST NAME:",
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
        // Validate to ensure input is not blank
        validate: (response) => {
            if (response === "") {
                return console.log('\u001b[31m', '\n Try again');
            }
            return true;
        }
    },
    {
        name: "employeeRole",
        type: "list",
        message: "SELECT EMPLOYEE ROLE:",
        //Invoke retrieveRole() function to retrive current roles in employee_db
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
    },
    {
        name: "employeeManager",
        type: "list",
        message: "SELECT EMPLOYEE MANAGER:",
        //invoke retrieveEmployee() function to retrive current employees in employee_db to select as manager
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Add an employee') {
                return true;
            } 
            return false;
        },
    },

    //Update an employee role Task
    {
        name: "updateEmployee",
        type: "list",
        message: "SELECT EMPLOYEE:",
        //invoke retrieveEmployee() function to retrive current employees in employee_db
        choices: retrieveEmployee,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            } 
            return false;
        },
    },
    {
        name: "updateRole",
        type: "list",
        message: "SELECT NEW ROLE:",
        //invoke retrieveRole() function to retrive current roles in employee_db to update
        choices: retrieveRole,
        when: (response) => {
            if (response.task === 'Update an employee role') {
                return true;
            } 
            return false;
        },
    },
];

module.exports = prompts;