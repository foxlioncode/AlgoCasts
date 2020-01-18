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
  let displayIterate = "x";

  // Push element into rowArr
  for (let i = 0; i < iterateCount; i++) {
    if (rowArr.length == n) {
      matrixStructure.push(rowArr);
      rowArr = [];
      rowArr.push(displayIterate);
      // displayIterate++;
    } else {
      rowArr.push(displayIterate);
      // displayIterate++;
    }
  }

  matrixStructure.push(rowArr);
  rowArr = [];

  spiralAlgorithm(matrixStructure, n, 0, 0);

  // ------------------------------------------------------------------------------------------------------------------------
  return matrixStructure;
}

// ========================================================================================================================
function replaceMatrixElement(matrix, row, column, newElement) {
  matrix[row][column] = newElement;
}

// ========================================================================================================================
// Spiral Algorithm

function spiralAlgorithm(matrix, n, originRow, originColumn) {
  let inputNumber = 1;

  // Replace going right to the end.
  for (let i = 0; i < n; i++) {
    replaceMatrixElement(matrix, 0, i, inputNumber);
    inputNumber++;
  }

  // Replace going down to the end.
  for (let i = 1; i < n; i++) {
    replaceMatrixElement(matrix, i, n - 1, inputNumber);
    inputNumber++;
  }

  // Replace going left to the end.
  for (let i = n - 1; i > 0; i--) {
    replaceMatrixElement(matrix, n - 1, i - 1, inputNumber);
    inputNumber++;
  }

  // Replace going up to the end.
  for (let i = n - 1; i > 1; i--) {
    replaceMatrixElement(matrix, i - 1, 0, inputNumber);
    inputNumber++;
  }

  // ------------------------------------------------------------------------------------------------------------------------
  // Inner Border
  // Replace going right to the end.
  for (let i = 0; i < n - 2; i++) {
    replaceMatrixElement(matrix, 1, i + 1, inputNumber);
    inputNumber++;
  }

  // Replace going down to the end.
  for (let i = 1; i < n - 2; i++) {
    replaceMatrixElement(matrix, i + 1, n - 2, inputNumber);
    inputNumber++;
  }

  // Replace going left to the end.
  for (let i = n - 2; i > 1; i--) {
    replaceMatrixElement(matrix, n - 2, i - 1, inputNumber);
    inputNumber++;
  }

  // Replace going up to the end.
  for (let i = n - 1; i > 3; i--) {
    replaceMatrixElement(matrix, i - 2, 1, inputNumber);
    inputNumber++;
  }

  // ------------------------------------------------------------------------------------------------------------------------
  // Final Border
  // Replace going right to the end.
  for (let i = 0; i < n - 2 - 2; i++) {
    replaceMatrixElement(matrix, 1+1, i + 1 + 1, inputNumber);
    inputNumber++;
  }

  // Replace going down to the end.
  for (let i = 1; i < n - 2 - 2; i++) {
    replaceMatrixElement(matrix, i + 1 + 1 , n - 2 - 1, inputNumber);
    inputNumber++;
  }

  // Replace going left to the end.
  for (let i = n - 2 -2; i > 1; i--) {
    replaceMatrixElement(matrix, n - 2 -1, i, inputNumber);
    inputNumber++;
  }

  // Replace going up to the end.
  // for (let i = n - 1; i > 3; i--) {
  //   replaceMatrixElement(matrix, i - 2, 1, inputNumber);
  //   inputNumber++;
  // }

  // ------------------------------------------------------------------------------------------------------------------------
  // Check if inputNumber has been exceeded. If not, then continue, otherwise return.

  // ------------------------------------------------------------------------------------------------------------------------
  // Spiral Recursion
  if (n == 0) {
    return;
  } else {
    n--;
    originRow++;
    originColumn++;
    // spiralAlgorithm(matrix, n,  originRow, originColumn);
  }

  return matrix
}

// ========================================================================================================================
// Test
console.log(matrix(6));

// ========================================================================================================================
module.exports = matrix;
