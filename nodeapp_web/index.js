// Instructions for running this JavaScript app
//
// In cmd window: cd to /Users/jerzy/Develop/JavaScript/nodeapp_web
// In terminal run: node index.js
// Open this website to see the output:
// http://localhost:8080/

var http = require('http')

// Create a server 
http.createServer(function (req, res) {
  res.write('Hello World!\n') // Write a response to the browser
  res.write('I just learned how write a simple JavaScript app.') // Write a response to the browser
  res.end() // end the response
}).listen(8080) // the server object listens on port 8080 

console.log('Server started')

