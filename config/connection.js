const mysql = require('mysql2');
require('dotenv').config();

// connect to employee_db with mysql, use .env file to secure password
const db = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employee_db'
    },
    // highlight with cyan console log to confirm connection to database in terminal
    console.log('\x1B[36m', `Successfully Connected to the employee_db database ✔`)
); 

module.exports = db;


