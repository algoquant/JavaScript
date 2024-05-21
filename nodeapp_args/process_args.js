// Instructions for running this JavaScript app
// This JavaScript app is an example of parsing input arguments
//
// In cmd window: cd to /Users/jerzy/Develop/JavaScript/nodeapp_args
// In terminal run: node process_args.js one two three

import { argv } from 'process'

// Just print the first argument
console.log("First argument = " + argv[2])

// Print all the arguments in array process.argv
argv.forEach((val, index, array) => {
  console.log(`${index}: ${val}`)
})

