// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// function will take in the answers object and convert it into the README.md file content
function generateReadmeContent(answers) {
    return `
# ${answers.title}

## Table of Contents
${answers.contents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}
    `;
}


// An array of questions for user input
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
        message: 'Write the usage information for your project.',
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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully created" + fileName);
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadmeContent(answers);
        writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();
  
