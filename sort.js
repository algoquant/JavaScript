////////////////////////////////////////
// Sorting arrays


// Create a 1d array
array1d = []
for (let i = 0; i < 7; i++) {
    array1d[i] = 10 * Math.random() | 1
} // end for
array1d
// Sort the 1d array ascending
array1d.sort()
// Sort the 1d array ascending using a lambda function
array1d.sort((a, b) => (a - b))
// Sort the 1d array descending
array1d.sort((a, b) => (b - a))


// Create a 2d array
array2d = [["hello", 8], ["bye", 4], ["good", 2], ["bad", 7]]
// console.log("array2d = " + array2d)
array2d

// Sort the 2d array according to the second element of each sub-array
array2d.sort(function(a, b) {
    return (a[1] - b[1])
})
array2d


