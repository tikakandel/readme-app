function generateReadme(answer) {

    let licenseLink = '';
    console.log(answer);
    switch(answer.license) {
      case 'MIT': licenseLink = 'https://img.shields.io/badge/MIT-Licence-green';
      break;
  
      case 'Apache': licenseLink = 'https://img.shields.io/badge/Apache-Licence-purple';
      break;
  
      case 'GPL': licenseLink = 'https://img.shields.io/badge/GPL-Licence-brown';
      break;
  
      case 'BSD3': licenseLink = 'https://img.shields.io/badge/BSD3-Licence-black';
      break;
  
      default: licenseLink = 'This app has no license.'
    }

    return `

    
![${answer.license}](${licenseLink})
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
    This app is licensed under the ${answer.license} license.
## Questions
    Any question please reachout 
    * GitHub: ${answer.github} : https://github.com/${answer.github}
    * Email:${answer.email}
      
`;
}

module.exports = {
    generateReadme,
};
