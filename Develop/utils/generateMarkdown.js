//Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { license ? license : "" }

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { license ? license : "" }

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

 ${data.description}

 ---
 ## Table Of Contents

 * [Installation](#installation)

 * [Useage](useage)

 * [License](#license)

 * [Test](test)

 * [Contributions](contributions)

 * [Questions](questions)

 ---

 ## Installation

 Download the application and run:

 \`\`\`
 ${data.dependencies}
 \`\`\`

 ## Useage

 ${data.usage}

 ## License

 ${data.license}

 ## Test

 To run tests, run these commands:

 \`\`\`
 ${data.test}
 \`\`\`

 ## Contributions

 ${data.contributors}

 ## Questions

 For additional questions, contact me at the email provided below:

 - GitHub: [${data.github}](https://github.com/${data.github}/)
 - Email:  ${data.email}

`;
}

module.exports = generateMarkdown;
