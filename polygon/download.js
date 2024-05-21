// In cmd window run: 
//  node /Users/jerzy/Develop/JavaScript/polygon/download.js VXX/range/1/minute/2023-05-21/2023-06-27 /Users/jerzy/Develop/data/data.json
// Code borrowed from:
// https://futurestud.io/tutorials/download-files-images-with-axios-in-node-js

const axios = require('axios')
const Fs = require('fs')  
const Path = require('path')  

// Get variables from command line
var argv = require('minimist')(process.argv.slice(2))
// Print argv
// console.dir(argv)

// If SPY was not obtained from command line:
// var symboln = "SPY"
// var urll = "https://api.polygon.io/v2/aggs/ticker/" + symboln + "/range/1/minute/2020-01-01/2021-07-20?adjusted=true&sort=asc&limit=50000&apiKey=yl6CIbQd6jicKUpTSQdF4fhmsLFkJ89K"

// If SPY was obtained from command line:
var urll = "https://api.polygon.io/v2/aggs/ticker/" + argv._[0] + "?adjusted=true&sort=asc&limit=500&apiKey=yl6CIbQd6jicKUpTSQdF4fhmsLFkJ89K"
// var urll = "https://api.polygon.io/v2/aggs/ticker/VXX/range/1/minute/2023-01-23/2021-07-21?adjusted=true&sort=asc&limit=500&apiKey=yl6CIbQd6jicKUpTSQdF4fhmsLFkJ89K"
// var jayson = "C:/Develop/data/polygon/data.json"
var jayson = argv._[1]

async function getpoly (url, path) {

  const writer = Fs.createWriteStream(path)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
} // end getpoly

getpoly(urll, jayson)

