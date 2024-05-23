////////////////////////////////////////
// Sorting arrays


// Sort a 1d array
array1d = []
for (let i = 0; i < 7; i++) {
    array1d[i] = 10 * Math.random() | 1
} // end for
array1d
array1d.sort()

// Sort a 2d array according to the second element of each sub-array
array2d = [["hello", 8], ["bye", 4], ["good", 2], ["bad", 7]]
// console.log("array2d = " + array2d)
array2d
array2d.sort(function(a, b) {
    return (a[1] - b[1]);
});
array2d
