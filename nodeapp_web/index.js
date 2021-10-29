// In cmd window: cd to C:\Develop\JavaScript\nodeapp_web
// Run: node index.js

// Open this website to see the output:
// http://localhost:8080/

var http = require('http');

//Create a server 
http.createServer(function (req, res) {
  res.write('Hello World!\n'); //write a response to the browser
  res.write('I just learned how write a simple JavaScript app.'); //write a response to the browser
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080 

console.log('Server started');

