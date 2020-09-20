const fs = require("fs");
const inquirer = require("inquirer");
//const markdown = require("./generateMarkdown");

const questions = [
    {   type: 'input',
        message: "What is the name of the project?",
        name: "project_title"
    },
    {   type: 'input',
        message: "Please provide a table of contents",
        name: "table_of_contents"
    },
    {   type: 'input',
        message: "What is the name of the Developer?",
        name: "name"
    },
    {   type: 'input',
        message: "What is the github page for this application?",
        name: "github_pages"
    },
    {  type: 'input',
        message: "Please provide a description of the project",
        name: "description"
    },
    {   type: 'input',
        message: "What is the installation process for the application?",
        name: "installation"
    },
    {   type: 'input',
        message: "How will this project/ application be used?",
        name: "usage"
    },
    {   type: 'input',
        message: "What licenses are required with this project?",
        name: "licenses"
    },
    {   type: 'input',
        message: "Who were the contributors to this project?",
        name: "contribution"
    },
    {   type: 'input',
        message: "What QA test process were done for this project?",
        name: "test"
    }
]

function init () {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", inquirerResponse, JSON.stringify(data)); // this is showing object object
        
    })
    .catch((err) => {
        console.log(err);
    })
}

init();
// const userName = questions.userName
// .then(questions => {
//   console.log(questions.data);
// });

