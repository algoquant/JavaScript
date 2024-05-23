////////////////////////////////////////
// Array tests

// Create two vectors
let v1 = [9, 5, 6, 1]
let v2 = [3, 2, 5, 2]
console.log("v1 = " + v1)
console.log("v2 = " + v2)

// Push back (shift) the vector elements and add a new element to the end
function pushb(vec, elem) {
  lenv = vec.length
  // Shift (copy) the vector elements
  for (let i = 0; i < (lenv-1); i++) {
    vec[i] = vec[i+1]
  } // end for
  // Add the new element to the end of vec
  vec[lenv-1] = elem
} // end pushb

pushb(v1, 3)
console.log("v1 + 3 = " + v1)

console.log("v1*v2 = " + dotprod(v1, v2, 2))

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
// Run it
dotprod(v1, v2)

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



////////////////////////////////////////
// Creating 2d arrays

// Create a 2d array and fill it with random numbers
// let array1d = []
let array2d = []
for (let i = 0; i < 7; i++) {
  array2d[i] = [(10 * Math.random() | 1), (10 * Math.random() | 1)]
  // array2d[i, "val1"] = 10 * Math.random() | 1
  // array2d[i, "val2"] = 10 * Math.random() | 1
  // array1d = []
  // array1d.push(10 * Math.random() | 1)
  // array1d.push(10 * Math.random() | 1)
  // array2d.push(array1d)
} // end for
// Get the second sub-array
array2d[1]
// Get the first element of the second sub-array
array2d[1][0]
// Get the dimensions of the array
array2d.length
array2d[0].length


// Create an array of objects with random numbers
let array2d = []
for (let i = 0; i < 7; i++) {
  array2d[i] = {val1: (10 * Math.random() | 1), val2: (10 * Math.random() | 1)}
} // end for
// Get the first element of the second sub-array
array2d[1]["val1"]
// Get the dimensions of the array
array2d.length
Object.keys(array2d[0]).length


