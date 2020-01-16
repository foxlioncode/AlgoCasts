// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// ========================================================================================================================
// MY SOLUTION
function matrix(n) {
  // Create Matrix n x n

  let matrixStructure = [];
  let rowArr = [];
  let iterateCount = n * n;
  let displayIterate = 1;

  // Push element into rowArr
  for (let i = 0; i < iterateCount; i++) {
    if (rowArr.length == n) {
      matrixStructure.push(rowArr);
      rowArr = [];
      rowArr.push(displayIterate);
      displayIterate++;
    } else {
      rowArr.push(displayIterate);
      displayIterate++;
    }
  }

  matrixStructure.push(rowArr);
  rowArr = [];

  replaceMatrixElement(matrixStructure, 0, 1, "hello");

  // Spiral Algorithm
  // Replace going right to the end.
  // Replace going down to the end.
  // Replace going left to the end.
  // Replace going up to the end.
  // Reduce count

  return matrixStructure;
}

function replaceMatrixElement(matrix, row, column, newElement) {
  matrix[row][column] = newElement;
}

console.log(matrix(4));

// ========================================================================================================================
module.exports = matrix;
