// Example of parsing arguments
// https://github.com/substack/minimist
// In cmd window: cd C:\Develop\JavaScript\nodeapp_args
// Run: node process_args_minimist.js one two three

// Get variables from command line
var argv = require('minimist')(process.argv.slice(2));

// Print argv
// console.dir(argv);

// Print the third element of argv._
console.log('third argument: ' + argv._[2]);

// Print all elements of argv._
argv._.forEach((val, index, array) => {
  console.log(`${index}: ${val}`);
});

