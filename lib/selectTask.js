const inquirer = require('inquirer');
const prompts = require('./prompts.js');
const handleTask = require('./handleTask.js');

// Present inquirer prompt list, when a user selecte a task, this function will send response to handleTask.js, to allocate user choice to a specified queryor catch errors

function selectTask() {
    inquirer
    .prompt(prompts)
    .then((response => {
        handleTask(response)
    }))
    .catch(err => {
        console.log(err)    
    })
};

module.exports = selectTask;