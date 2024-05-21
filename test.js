// Instructions for running this JavaScript file
//
// In cmd window: cd to /Users/jerzy/Develop/JavaScript/nodeapp_args
// In terminal run: node process_args.js one two three

// import { argv } from 'process'

// Just print the first argument
// console.log("1 + 1 = " + 2)

/*
// Print all the arguments in array process.argv
argv.forEach((val, index, array) => {
console.log(`${index}: ${val}`)
})

// Declare function
printMsg = function() {
  console.log("This is a message from printMsg")
}
printMsg()

console.log("This is a message from the test package")
*/

// Load math.js (using node.js)
// let math = require('mathjs')

console.log(3 % 5)
console.log(15 % 5)

// Inner (dot) product two vectors
let v1 = [9, 5, 6, 1]
let v2 = [3, 2, 5, 2]
// let dotp = math.dot(v1, v2)
console.log("v1 = " + v1)
console.log("v2 = " + v2)
// console.log("dotp = " + dotp)

pushb(v1, 3)
console.log("v1 + 3 = " + v1)

console.log("v1*v2 = " + dotprod(v1, v2, 2))

// Push back (shift) the vector elements and add a new element to the end
  function pushb(vec, elem) {
  lenv = vec.length
  // Shift the vector elements
  for (let i = 0; i < (lenv-1); i++) {
    vec[i] = vec[i+1]
  } // end for
  // Add the new element to the end of vec
  vec[lenv-1] = elem
} // end pushb

/*
// Switch around two vector elements
let v3 = [10, 20]
console.log("v3 = " + v3)
switchf(v3)
console.log("v3 = " + v3)

function switchf(vec) {
  let tmp = vec[0]
  vec[0] = vec[1]
  vec[1] = tmp
} // end switchf
*/

/*
// Calculate the dot product of two vectors 
function pushb(vec, ptr = 0) {
  lenv = vec.length
  i2 = (i + ptr) % lenv
  if (v2.length == lenv) {
    let dotp = 0
    let i2 = ptr
    for (let i = 0; i < lenv; i++) {
      i2 = (i + ptr) % lenv
      dotp += v1[i] * v2[i2]
    } // end for
    return dotp
  } else {
    return NaN
  }
} // end pushb
*/


// Calculate the dot product of two vectors
function dotprod(v1, v2) {
  lenv = v1.length
  if (v2.length == lenv) {
    let dotp = 0
    for (let i = 0; i < lenv; i++) {
      dotp += v1[i] * v2[i]
    } // end for
    return dotp
  } else {
    return NaN
  }
} // end dotprod

/*
// Calculate the dot product of two vectors 
// with modulo shift of second vector
function dotprod(v1, v2, ptr = 0) {
  lenv = v1.length
  if (v2.length == lenv) {
    let dotp = 0
    let i2 = ptr
    for (let i = 0; i < lenv; i++) {
      i2 = (i + ptr) % lenv
      dotp += v1[i] * v2[i2]
    } // end for
    return dotp
  } else {
    return NaN
  }
} // end dotprod

*/


// Multiply two arrays
// let mat1 = [[1, 2], [3, 4], [5, 6]]
// let mat2 = [[1,-1], [2,-2], [3,-3]]
// mat1.forEach(v => console.log(v))
// console.log("mat1 = " + mat1[0])


// Multiply two matrices
// let mat1 = math.matrix([[1, 2], [3, 4], [5, 6]])
// let mat2 = math.matrix([[1,-1], [2,-2], [3,-3]])
// let mat1 = math.matrix([[3, 4], [5, 6]])
// let mat2 = math.matrix([[2, -2], [3, -3]])
// console.log("mat1 = " + mat1)
// console.log("mat2 = " + mat2)

// let matp = math.multiply(mat1, mat2)
// console.log("matp = " + matp)

