// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    
    return inquirer.prompt([

        {

            type: 'input',

            name: 'projectTitle',

            message: 'What is the title of your project?',
            
            validate: projectInput => {

                if (projectInput) {

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

            type: 'input',

            name: 'credits',

            message: 'Were there other users, videos, or websites that helped you create this project? (If website, include url)',

            validate: creditsInput => {

                if (creditsInput) {

                    return true;

                } else {

                    console.log('Please enter credits! If you do not have any credit to give then type "N/A".')

                    return false;

                }

            }

        },

        {
            
            type: 'list',

            name: 'license',

            message: 'What license did you use?',

            choices: ['MIT License', 'Apache License 2.0', 'GNU Public License', 'Boost Software License 1.0', 'N/A'],

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

            name: 'github uername',

            message: 'What is your Github username?',

            validate: githubInput => {

                if (githubInput) {

                    return true;

                } else {

                    console.log('Please enter your Github username!');

                    return false ;

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

    ]);  
} 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
promptQuestions();

// Function call to initialize app
// init();
