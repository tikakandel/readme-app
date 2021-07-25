/*# Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README*/


const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markdown = require('./lib/markdown');

// Goal: write down a readme generator

// why -- what info is needed

// ask the user questions
// eg.what is the project name
// what is the license
// what is the desc....
inquirer
    .prompt([
        {
            type: "input",
            message: 'What is the title of the project?',
            name: 'title'},
    
            {type: 'input',
            message: 'Description of your project:',
            name: 'description'
            },
    
            {type: 'input',
            message: 'How do you install your project?',
            name: 'install'
            },
    
            {type: 'input',
            message: 'How is your project used?',
            name: 'usage'
            },
    
            {type: 'input',
            message: 'How can people contribute to your project?',
            name: 'contribute'
            },

            {
                name: "license",
                type: "list",
                message: "Choose your license:",
                choices: ["MIT", "Apache", "GPL", "BSD3"],
                },
    
            {type: 'input',
            message: 'What tests run with your project?',
            name: 'tests'
            },
    
            {type: 'input',
            message: 'What is your GitHub user name?',
            name: 'github'
            },
    
            {type: 'input',
            message: 'What is your email address?',
            name: 'email'
            },
    
            
    ])
    .then((answer) => {
        // store the answers to these qs to a variable
        console.log(answer);
        // write these answers to a file (final readme.md)
        const readme = markdown.generateReadme(answer);     
        const readmePath = path.join(__dirname, 'readme.md');
        fs.writeFileSync(readmePath, readme, 'utf-8');
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));


