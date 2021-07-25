// In cmd window: cd C:\Develop\JavaScript\polygon
// Run: node download.js VXX/range/1/minute/2021-06-21/2021-07-21 C:/Develop/data/polygon/data.json
// Code borrowed from:
// https://futurestud.io/tutorials/download-files-images-with-axios-in-node-js

const axios = require('axios');
const Fs = require('fs')  
const Path = require('path')  

// Get variables from command line
var argv = require('minimist')(process.argv.slice(2));
// Print argv
// console.dir(argv);

// If SPY was not obtained from command line:
// var sym_bol = "SPY";
// var ur_l = "https://api.polygon.io/v2/aggs/ticker/" + sym_bol + "/range/1/minute/2020-01-01/2021-07-20?adjusted=true&sort=asc&limit=50000&apiKey=J2M4jq6ltDM7c9VlboKAFIUklyxvpIdX";

// If SPY was obtained from command line:
var ur_l = "https://api.polygon.io/v2/aggs/ticker/" + argv._[0] + "?adjusted=true&sort=asc&limit=500&apiKey=J2M4jq6ltDM7c9VlboKAFIUklyxvpIdX";
// var ur_l = "https://api.polygon.io/v2/aggs/ticker/VXX/range/1/minute/2021-06-21/2021-07-21?adjusted=true&sort=asc&limit=500&apiKey=J2M4jq6ltDM7c9VlboKAFIUklyxvpIdX";
// var out_put = "C:/Develop/data/polygon/data.json";
var out_put = argv._[1]

async function down_load (url, path) {

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
}

down_load(ur_l, out_put)

