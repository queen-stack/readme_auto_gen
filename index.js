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
        message: "What is your GitHub userName?"
    },
    {
        type: 'input',
        name: "github_pages",
        message: "What is the GitHub page for this application?"
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
        type: 'list',
        name: "usage",
        message: "How will this application be used?",
        choices: ['innovative solution', 'upgrade/maintenance', 'research']
    },
    {
        type: 'list',
        name: "license",
        message: "Does this project require a license?",
        choices: ['MIT', 'Apache 2.0', 'GPL', 'None']
    },
    {
        type: 'list',
        name: "contribution",
        message: "Who contributed on this project?",
        choices: ['classmate' , 'individual contributor' , 'internet research']  
    },
    {
        type: 'list',
        name: "test",
        message: "What QA test process was done for this project?",
        choices: ['UAT' , 'automation', 'manual functional testing' , 'E2E regression']
    },
    {
        type: 'input',
        name: "profile",
        message: "What is your Linkedin profile?"
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