
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "None") {
    return '';
  }
  return (license + ' Badge');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == "None") {
    return '';
  }
  return 'License Link';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return ''
  }
  return `## License
  This application is covered under "${license}". See the LICENSE file for license rights and limitations.
  
  ${renderLicenseLink(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateTable(data) {
  if (!data.confirmTable) {
    return;
  }

  return `## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)`;
}

function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ${generateTable(data)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contribute 
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions 
  [Link to my GitHub Profile](https://github.com/${data.username})
  
  Email me for any additional questions at 
  ${data.email}
`;
}

module.exports = generateMarkdown;

const licenseDetails = [
  {
    'name': 'Apache license 2.0',
    'badge': ,
    'link':
  },
  {
    'name': 'Boost Software License 1.0',
    'badge': ,
    'link':
  },
  {
    'name': 'BSD 2-clause "Simplified" license',
    'badge': ,
    'link':
  },
  {
    'name': 'BSD 3-clause "New" or "Revised" license',
    'badge': ,
    'link':
  },
  {
    'name': 'Creative Commons Zero v1.0 Universal',
    'badge': ,
    'link':
  },
  {
    'name': 'Do What The F*ck You Want To Public License',
    'badge': ,
    'link':
  },
  {
    'name': 'Eclipse Public License 1.0',
    'badge': ,
    'link':
  },
  {
    'name': 'GNU Affero General Public License v3.0',
    'badge': ,
    'link':
  },
  {
    'name': 'GNU General Public License v2.0',
    'badge': ,
    'link':
  },
  {
    'name': 'GNU General Public License v3.0',
    'badge': ,
    'link':
  },
  {
    'name': 'GNU Lesser General Public License v3.0',
    'badge': ,
    'link':
  },
  {
    'name': 'Mozilla Public License 2.0',
    'badge': ,
    'link':
  },
  {
    'name': 'MIT',
    'badge': ,
    'link':
  },
  {
    'name': 'The Unlicense',
    'badge': ,
    'link':
  }
]