const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js');

function writeToFile() {
    fs.writeFile('logo.svg', response, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
 )}; 

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Type no more than three characters for your logo:',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What text color do you prefer?',
            name: 'textColor',
        },
        {
            type: 'list',
            choices: ['Circle', 'Square', 'Triangle'],
            message: 'Should your logo be a circle, triangle, square?',
            name: 'shape',
        },
        {
            type: 'input',
            message: 'What backgronud logo should your logo have?',
            name: 'logoColor',
        }
    ])
    .then((response) => {
        if (response.text.length > 3) {
            console.log('You entered too many characters for you logo');
        } else if (response.textColor = null) {
            console.log('Please enter a color for your text color');
        //} else if (response.shape != 'triangle', 'circle', 'square') {
            //console.log('Please enter a valid option for your logo shape');
        } else if (response.logoColor = null) {
            console.log('Please enter a color for your logo background');
        } else {
            //console.log('Generated logo.svg')
            writeToFile('logo.svg', response)
        }
    });