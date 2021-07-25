function generateReadme(answer) {

  //This switch case takes the input of the license prompts and assigns a url to the proper license
  let licenseLink = '';
  
  switch(answer.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'Apache': licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    break;

    case 'GPL': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'BSD3': licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    break;

    default: licenseLink = 'This app has no license.'
  }
  
  //The beginning of the markdown document creation
  return `
[![Generic badge](https://img.shields.io/badge/license-${answer.license}-<COLOR>.svg)](#[${answer.license}](${licenseLink}))
    

# Title
${answer.title}        

## Description
${answer.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Installation
    ${answer.install}
## Tests
    ${answer.tests}
## Usage
    ${answer.usage}
## Contributing
    ${answer.contribute}
## License
    This app is licensed under the [${answer.license}](${licenseLink}) license.
## Questions
    Any question please reachout 
    * GitHub: ${answer.github} : https://github.com/${answer.github}
    * Email:${answer.email}
      
`;
}

module.exports = {
    generateReadme,
};


