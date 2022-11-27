// Importing the readline-sync package for taking the input from the user
let readline = require("readline-sync")

let input = readline.question("Enter the string: ")

// Match method returns an array containing the characters satisfying the given regex from the string
let strArray = input.match(/\d+/g)

// A variable to store the sum of the numbers
let sum = 0;

for (let i = 0; i < strArray.length; i++) {
  sum += Number(strArray[i])
}

console.log(`The sum of all the numbers in the string is ${sum}`);
