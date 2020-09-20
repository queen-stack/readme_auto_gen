const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown");

// const questions = [
//     {   
//         message: "What is the name of the project?",
//         name: "project title"
//     },
//     {   
//         message: "Please provide a table on contents",
//         name: "Table of contents"
//     },
//     {   
//         message: "What is the name of the Developer?",
//         name: "Name"
//     },
//     {   
//         message: "What is the github page for this application?",
//         name: "GitHub pages"
//     },
//     {  
//         message: "Please provide a description of the project",
//         name: "description"
//     },
//     {   
//         message: "What is the installation process for the application?",
//         name: "installation"
//     },
//     {   
//         message: "How will this project/ application be used?",
//         name: "usage"
//     },
//     {   
//         message: "What licenses are required with this project?",
//         name: "licenses"
//     },
//     {   
//         message: "Who were the contributors to this project?",
//         name: "contribution"
//     },
//     {   
//         message: "What QA test process were done for this project?",
//         name: "test"
//     },
// ]

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
.then(questions => {
  console.log(questions.data);
});

