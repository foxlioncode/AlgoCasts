// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ========================================================================================================================
// SOLUTION #1

function chunk(array, size) {
  let chunked = [];

  for (let element of array) {
    let last = chunked[chunked.length - 1];

    // If there is no last element in chunked, or if the last element is equal to the size then ...
    if (!last || last.length == size) {
      // In this step you are creating the array and pushing the element into the array at the same time.
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

// ========================================================================================================================
// MY SOLUTION
// function chunk(array, size) {
//   let chunkArr = [];
//   let outputArr = [];

//   for (let element of array) {
//     if (chunkArr.length != size) {
//       chunkArr.push(element);
//     } else {
//       outputArr.push(chunkArr);
//       chunkArr = [];
//       chunkArr.push(element);
//     }
//   }

//   outputArr.push(chunkArr);
//   return outputArr;
// }

module.exports = chunk;
