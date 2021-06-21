// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 1: {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
      break;
    case 2: {
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    };
      break;
    case 3: {
      return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    };
      break;
    case 4: {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
      break;
    case 5: {
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    };
      break;
    case 6: {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
      break;
    case 7: {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    };
      break;
    case 8: {
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    };
      break;
    default: {
      return ``
    };
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 1: {
      return `https://opensource.org/licenses/Apache-2.0`
    };
      break;
    case 2: {
      return `https://opensource.org/licenses/BSD-3-Clause`
    };
      break;
    case 3: {
      return `https://opensource.org/licenses/BSD-2-Clause`
    };
      break;
    case 4: {
      return `https://opensource.org/licenses/gpl-license`
    };
      break;
    case 5: {
      return `https://opensource.org/licenses/lgpl-license`
    };
      break;
    case 6: {
      return `https://opensource.org/licenses/MIT`
    };
      break;
    case 7: {
      return `https://opensource.org/licenses/MPL-2.0`
    };
      break;
    case 8: {
      return `https://opensource.org/licenses/EPL-2.0`
    };
      break;
    default: {
      return ``
    };
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 1: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under Apache License 2.0\n
      \n
      `
    };
      break;
    case 2: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under BSD 3-Clause\n
      \n`
    };
      break;
    case 3: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under BSD 2-Clause\n
      \n`
    };
      break;
    case 4: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under GNU General Public License (GPL)\n
      \n`
    };
      break;
    case 5: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under GNU "Lesser" General Public License (LGPL)\n
      \n`
    };
      break;
    case 6: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under the MIT license\n
      \n`
    };
      break;
    case 7: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under Mozilla Public License 2.0\n
      \n`
    };
      break;
    case 8: {
      return `
      Copyright © Brett Markland-Sanchez. All rights reserved.\n
      \n
      Licensed under Eclipse Public License 2.0\n
      \n`
    };
      break;
    default: {
      return ``
    };
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);
  let licenseLink = renderLicenseLink(data.license);
  return `
  # ${data.title}
  ${badge}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Testing](#testing)
  - [License](#license)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contributions
  ${data.contribute}
  ## Testing
  ${data.test}
  ## License
  ${licenseSection}
  \n Find a copy of this license here: \n
  ${licenseLink}
  `;
}

module.exports = generateMarkdown;
