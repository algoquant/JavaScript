// Example of parsing arguments
// In cmd window: cd C:\Develop\JavaScript\nodeapp_args
// Run: node process_args.js one two three

import { argv } from 'process';

// print all arguments in array process.argv
argv.forEach((val, index, array) => {
  console.log(`${index}: ${val}`);
});

// Or just print the first argument
// console.log(argv[2]);

