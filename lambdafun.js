////////////////////////////////////////
// Lambda functions

let multfun = (a, b) => a * b
multfun(2, 3) // 6
let addfun = (a, b) => a + b
addfun(2, 3) // 5

// Lambda function returns a promise but not the current time
let timefun = async () => {
  let timen = new Date()
  return timen
} // end timefun
timefun()
// Lambda function returns the current time and a promise
timefun().then((dumv) => console.log(dumv))
timefun()

// Define a vector of names
const namev = ["Alice", "Bob", "Charlie", "David"]
// Get the length of each name using map
namev.map(dumv => dumv.length)

