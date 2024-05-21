// Functions for adding and removing elements from a queue.

// The function RandomInt() returns a random integer between 1 and 9 (inclusive).
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function randomInt() {return 10*Math.random() | 1}

// Create empty open position queue
let positionQueue = []

// Add element to the end of the queue.
// pushQueue(randomInt())
function pushQueue(pushv) {
  console.log(pushv);
  positionQueue.push(pushv);
  return positionQueue;
}; // end pushQueue

// Remove element from the end of the queue.
function popQueue() {
  let popv = positionQueue.pop();
  console.log(popv);
  return positionQueue;
}; // end popQueue

// Add element to the front of the queue.
// unshiftQueue(randomInt())
function unshiftQueue(pushv) {
  console.log(pushv);
  positionQueue.unshift(pushv);
  return positionQueue;
}; // end unshiftQueue

// Remove element from the front of the queue.
function shiftQueue() {
  let popv = positionQueue.shift();
  console.log(popv);
  return positionQueue;
}; // end shiftQueue

