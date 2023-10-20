const db = require('./config/connection.js');
const { displayTitleText } = require('./lib/specialText.js');
const selectTask = require('./lib/selectTask.js');

// handle errors or start application
db.connect(function (err) {
    if (err) throw err;
    init();
});

// start application, show title special-text and present task list prompt 
function init() {
    displayTitleText();
    selectTask();
};