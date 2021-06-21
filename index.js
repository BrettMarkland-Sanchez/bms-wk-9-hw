// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What should this project be called?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description for the project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'If applicable, choose a license from the following numbered list:\n (1) Apache-2.0 \n (2) BSD-3-Clause \n (3) BSD-2-Clause \n (4) GNU-GPL-v3 \n (5) GNU-LGPL-v3 \n (6) MIT \n (7) MPL-2.0 \n (8) EPL-1.0 \n',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Specify installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: `What is the project's purpose/usage?`,
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How best can others contribute to the project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Specify testing instructions:',
        name: 'test',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, 'utf8', (error, response) =>
    error ? console.error(error) : console.log(response))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
        .then((response) => {
            let markdown = generateMarkdown(response);
            //console.log(markdown);
            writeToFile(`./output/README.md`, markdown);
        });
}

// Function call to initialize app
init();