
//     ![Top Language](https://img.shields.io/github/languages/top/${data.user}/{$data.title})
//     ![GitHub Language Count](https://img.shields.io/github/languages/count/${data.user}{data.title})
    
 
        const fs = require("fs");
        const inquirer = require("inquirer");
        const markdown = require("./generateMarkdown");
        
        const questions = [
            {   
                message: "What is the name of the project?",
                name: "title"
            },
            {   
                message: "Please provide a table on contents",
                name: "table of contents"
            },
            {   
                message: "What is the name of the Developer?",
                name: "Name"
            },
            {   
                message: "What is the github page for this application?",
                name: "GitHub pages"
            },
            {  
                message: "Please provide a description of the project",
                name: "description"
            },
            {   
                message: "What is the installation process?",
                name: "installation"
            },
            {   
                message: "How will this project/ application be used?",
                name: "usage"
            },
            {   
                message: "What licenses are required with this project?",
                name: "licenses"
            },
            {   
                message: "Who were the contributors to this project?",
                name: "contribution"
            },
            {   
                message: "What is the test process for this project?",
                name: "test"
            },
            {   
                message: "What is the user github email address?",
                name: "GitHub userName"
            },
            ]
        
        function init () {
            inquirer.prompt(questions)
            .then((inquirerResponse, data) => {   
                console.log("Making ReadMe");
                fs.writeFileSync("ReadMe.md", inquirerResponse, data);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        
        init();
        
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
       