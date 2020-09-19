const inquirer = require('inquirer')
const fs = require('fs');
const generatePage = require('./Develop/page-template.js'); 


console.log(message);
// array of questions for user
const questions = () => {
    return inquirer.prompt([
{
    type:
    name:
    message:

}
];

// function to write README file
// function writeToFile(fileName, data) {
// }
fs.writeToFile('./Develop/index.README.md', pageREADME, err => {
    if (err) throw new Error(err);
});
    console.log('Page created! Check out index.README in this directory to see it!');


// function to initialize program
// function init() {
// }
fs.copyFile('./Develop/index.README.md', err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('README.md sheet copied successfully!');
  });


// function call to initialize program
init();
