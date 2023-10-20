# MySQL-Employee-Tracker_HuiPan
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

1. [Description](#userStory)
  
2. [Installation](#installation)
  
3. [Usage](#usage)
  
4. [Contributions](#contributions)
  
5. [Questions](#questions)
  

## Description
This Application was built with Node.js, Inquirer, and MySQL, and is used for manage employee data by a command line Content Management System.
```
User Story:
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
```
Acceptance Criteria: 
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Installation
- 1.Download GitHub repository: [Github Repository]https://github.com/HuiPan-Peter/MySQL-Employee-Tracker_HuiPan.git
- 2.Open folder with VSCode to check "dependencies": {
    "dotenv": "^8.2.0",
    "inquirer": "^8.2.4",
    "mysql2": "^3.2.4"
  };
- 3.Under node command-line run ```npm i``` to install dotenv, inquirer and mysql2;

## Usage
- 1.Create a file in the root directory titled ".env" and assign your own "DB_NAME","DB_PASSWORD" and "DB_USER"
- 2.Under db directory, type "mysql -u root -p" in the terminal and enter your personal MySQL password. Next, type "source schema.sql" and "source seeds.sql" to create the employee_db database with mock data.
- 3.Under root directory, run bash command ``` npm start ``` to start the application;
- 4.Follow the Inquirer prompts, select a desired task;
- 5.When you completed a series of tasks, choose "EXIT" to quit the application from prompt list;
---
## Walkthrough Video Demo and Screenshot of the Application
[https://github.com/HuiPan-Peter/MySQL-Employee-Tracker_HuiPan/tree/main/videoDemo%26screenshot](https://github.com/HuiPan-Peter/MySQL-Employee-Tracker_HuiPan/tree/main/videoDemo%26screenshot)
---
## Contributions

https://github.com/HuiPan-Peter

## License

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

```
     https://opensource.org/licenses/MIT

    Licensed under the MIT License

    Copyright u00A9 [2023] [Hui Pan]
    Permission is hereby granted, free of charge, to any person obtaining 
a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
```

## Questions

If you have any questions about this application, Contact Me:

```
Github: https://github.com/HuiPan-Peter

Email:  guaranstone@gmail.com
```
