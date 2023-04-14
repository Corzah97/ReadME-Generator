// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateMarkdown = require("./assets/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "github",
        message: "What's you GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },

    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:"
    },

    {
        type: "input",
        name: "github",
        message: "What's you GitHub username?"
    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },

    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the proper usage of this repo?"
    },

    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
