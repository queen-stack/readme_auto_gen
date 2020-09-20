const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: 'input',
        name: "title",
        message: "What is the name of the project?"
    },
    {
        type: 'input',
        name: "username",
        message: "What is the GitHub userName?"
    },
    {
        type: 'input',
        name: "github_pages",
        message: "What is the github page for this application?"
    },
    {
        type: 'input',
        name: "description",
        message: "Please provide a description of the project"
    },
    {
        type: 'input',
        name: "installation",
        message: "What is the installation process for the application?"
    },
    {
        type: 'input',
        name: "usage",
        message: "How will this project/ application be used?",
    },
    {
        type: 'list',
        name: "license",
        message: "Does this project require a license?",
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None']
    },
    {
        type: 'input',
        name: "contribution",
        message: "Who contributed on this project?"  
    },
    {
        type: 'input',
        name: "test",
        message: "What QA test process were done for this project?"  
    },
    {
        type: 'input',
        name: "profile",
        message: "What is your GitHub profile link for this project?"
    }
];

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log("Making ReadMe");
            fs.writeFileSync("ReadMe.md", generateMarkdown(data));
        })
        .catch((err) => {
            console.log(err);
        })
}
init();