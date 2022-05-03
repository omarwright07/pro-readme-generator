// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project's description?"
    },
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Do you want a Table of Contents?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Do you want an Installation Section?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Do you want a Usage Section?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Do you want a License Section?',
        choices: [
            'JavaScript',
            'HTML',
            'CSS',
            'ES6',
            'jQuery',
            'Bootstrap',
            'Node'
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Do you want in your Contribute Section?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you want in your Test Section?'
    },
    {
        type: 'input',
        name: 'username',
        message: "What's your GitHub Username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            if (error) {
                reject(error);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            writeToFile('./dist/README.md', pageMarkdown);
            console.log('README.md created!')
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
