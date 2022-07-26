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

function renderCreditSection(credits) {

  if (!credits) {

    return '';

  }

  return `

  ## **Credits**
  ${credits}
  
  `;

}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = templateData => {

  const { license, credits, ...info } = templateData;

  return `
  
  # ${info.title}
  
  ${renderLicenseBadge(license)}
        
        
  ## **Description**
  ${info.description}
        
  ## **Table of Contents**
        
  * [Installation](#installation)
        
  * [Usage](#Usage)
        
  * [Credits](#Credits)
        
  * [License](#License)
        
  * [Questions](#Questions)
        
  =============
        
  ## **Installation** 
  ${info.installation}
        
  ## **Usage**
  ${info.usage}
        
  ${renderCreditSection(credits)}
  
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  
  ## **Questions**
  *Contact Me!*
  **Github**: github.com/${info.github}
  **Email**: ${info.email}
  
  `;
}
