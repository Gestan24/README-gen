const generateMarkdown = require('./utils/generateMarkdown.js');

const { writeFile } = require('./utils/writeInput.js');
// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');


// TODO: Create an array of questions for user input
const promptQuestions = readMeData => {

    readMEData = [];

    

    return inquirer.prompt([


        {

            type: 'input',

            name: 'title',

            message: 'What is the title of your project?',

            validate: titleInput => {

                if (titleInput) {

                    return true

                } else {

                    console.log('Please enter your project name!');

                    return false;

                }
            }
        },

        {

            type: 'input',

            name: 'description',

            message: 'What is your project about?',

            validate: descriptionInput => {

                if (descriptionInput) {

                    return true;

                } else {

                    console.log('Please enter a short description of your project!');

                    return false;

                }

            }

        },

        {


            type: 'input',

            name: 'installation',

            message: 'What is required to install your project?',

            validate: installationInput => {

                if (installationInput) {

                    return true;

                } else {

                    console.log('Please enter installation instructions!');

                    return false;
                }

            }

        },

        {

            type: 'input',

            name: 'usage',

            message: 'How do you use your app?',

            validate: usageInput => {

                if (usageInput) {

                    return true;

                } else {

                    console.log('Please explain how to use your app!');

                    return false;

                }

            }

        },

        {

            type: 'confirm',

            name: 'confirmCredits',

            message: 'Were there other users, videos, or websites that helped you create this project?',

            default: true

        },

        {

            type: 'input',

            name: 'credits',

            message: 'Who or what helped you with this project? (link website if needed)',

            when: ({ confirmCredits }) => confirmCredits

        },

        {

            type: 'list',

            name: 'license',

            message: 'What license did you use?',

            choices: ['mit', 'apache-2.0', 'gpl-3.0', 'bsl-1.0', 'N/A'],

            validate: license => {

                if (license) {

                    return true

                } else {

                    console.log('Choose a value!');

                    return false;

                }

            }

        },

        {

            type: 'input',

            name: 'github',

            message: 'What is your Github username?',

            validate: githubInput => {

                if (githubInput) {

                    return true;

                } else {

                    console.log('Please enter your Github username!');

                    return false;

                }

            }

        },

        {

            type: 'input',

            name: 'email',

            message: 'What is your email address?',

            validate: emailInput => {

                if (emailInput) {

                    return true;

                } else {

                    console.log('Please enter an email address!');

                    return false;

                }

            }

        }

    ]). then( readMeData);

    
};



// TODO: Create a function to initialize app

promptQuestions()

    .then(readMeData => {
        
        return generateMarkdown(readMeData);

    })
    
    .then(pageREADME => {
        
        return writeFile(pageREADME);
    
    })
    
    .then(writeFileResponse => {
        
        console.log(writeFileResponse);
    
    })

    .catch(err => {
        
        console.log(err);

    });

