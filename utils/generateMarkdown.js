// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateTable(data) {
  if (!data.confirmTable) {
    return;
  }

  return `## Table of Content
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
}

function generateMarkdown(data) {

  return `# ${data.title}
  ## Description 
  ${data.description}
  ${generateTable(data)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contribute 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions 
  [Link to my GitHub Profile](https://github.com/${data.username})
  
  Email me for any additional questions at 
  ${data.email}
`;
}

module.exports = generateMarkdown;
