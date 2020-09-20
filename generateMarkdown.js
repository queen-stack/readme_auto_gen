
//     ![Top Language](https://img.shields.io/github/languages/top/${data.user}/{$data.title})
//     ![GitHub Language Count](https://img.shields.io/github/languages/count/${data.user}{data.title})
    
 
        
        const userName = questions.userName
        
        
        function generateMarkdown(response) {
          return `
        
        # ${response.title}
        
        # Table of Content
        -[description](#description)
        -[installation](#installation)
        -[usage](#usage)
        -[licenses](#licenses)
        -[contribution](#contribution)
        -[test](#test)
        -[username](#username)
        -[profile](#profile)
        
        ${response.username}
        ##username:
        
            ${response.description}
        ##description:
        
            ${response.installation}
        ##installation:
        
            ${response.usage}
        ##usage:
        
            ${response.licenses}
        ##licenses:
        
            ${response.contribution}
        ##contribution:
        
            ${response.test}
        ##test:
        
            ${response.email}
        ##email:
        
            ${response.profile}
        ##profile:
        `;
        }
        
        module.exports = generateMarkdown;
       