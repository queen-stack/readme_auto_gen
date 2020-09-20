const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {   type: 'input',
        name: "title",
        message: "What is the name of the project?"
       
    },
    {   type: 'input',
        message: "What is the GitHub userName?",
        name: "username"
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
    {   type: 'list',
        name: "license",
        message: "Does this project require a license?",
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None']
        
    },
    {   type: 'input',
        message: "Were there contributors on this project?",
        name: "contribution"
    },
    {   type: 'input',
        message: "What QA test process were done for this project?",
        name: "test"
    },
    {
        type: 'input',
        message: "What is your GitHub profile link for this project?",
        name: "profile"
    }
];

function init () {
    inquirer.prompt(questions)
    .then ((data)  => {   
        console.log("Making ReadMe");
        fs.writeFileSync("ReadMe.md", generateMarkdown(data));
    })
    .catch((err) => {
        console.log(err);
    })
}

init();