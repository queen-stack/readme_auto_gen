function renderLicenseBadge(license) {
    if (license !== "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-purple.svg)`
    }
    return ''
}


//function generateMarkdown(response) {
const generateMarkdown = response => {

    return `
        
        # ${response.title}

        ${renderLicenseBadge(response.license)}

        # Table of Content
        -[description](#description)
        -[installation](#installation)
        -[usage](#usage)
        -[license](#license)
        -[contribution](#contribution)
        -[test](#test)
        -[username](#username)
        -[profile](#profile)
        

        ##username:
            ${response.username}
        
        ##description:
            ${response.description}
       
        ##installation:
            ${response.installation}
        
        ##usage:
            ${response.usage}
        
        ##license:
            ${response.license} 
        
        ##contribution:
            ${response.contribution}
        
        ##test:
            ${response.test}
       
        ##profile:
            ${response.profile}
        `;
}

module.exports = generateMarkdown;
