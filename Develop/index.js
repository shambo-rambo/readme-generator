// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Write a Table of Contents for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write the installation information for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Write the unsage information for your project.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Write the license information for your project.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Write the contributing information for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write the tests information for your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Write the questions information for your project.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
