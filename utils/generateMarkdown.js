
//     ![Top Language](https://img.shields.io/github/languages/top/${data.user}/{$data.title})
//     ![GitHub Language Count](https://img.shields.io/github/languages/count/${data.user}{data.title})
    
 
        
        //const userName = questions.userName
        
        
        //function generateMarkdown(response) {
        const generateMarkdown = response => {
        
        return `
        
        # ${response.title}
        
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
       