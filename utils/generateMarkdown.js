// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {

    return '';

  }

  return ` 
  
  [!(license: ${license}](https://img.shields.io/badge/license-${license}-green.svg)
  
  `;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {

    return '';

  }

  return `
  
  https://choosealicense.com/licenses/${license}/
  
  `;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {

    return '';

  }

  return `
  
  ## **License**
  This project is licensed under the ${license} license
  
  `;

}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = templateData => {

  const { license, credits, ...readMe } = templateData;

  return `
  
  # ${readMe.title}
  
  ${renderLicenseBadge(license)}
        
        
  ## **Description**
  ${readMe.description}
        
  ## **Table of Contents**
        
  * [Installation](#installation)
        
  * [Usage](#Usage)
        
  * [Credits](#Credits)
        
  * [License](#License)
        
  * [Questions](Questions)
        
  =============
        
  ## **Installation** 
  ${readMe.installation}
        
  ## **Usage**
  ${readMe.usage}
        
  ## **Credits**
  ${credits}
  
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  
  ## **Questions**
  *Contact Me!
  **Github: github.com/${readMe.github}
  **Email: ${readMe.email}
  
  `;
}
