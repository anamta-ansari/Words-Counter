#! /usr/bin/env node 
//import the 'inqurer' module which is a command line interface for node.js
import inquirer from "inquirer";
//declare const and assign it to the result of the inquire.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answer.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
