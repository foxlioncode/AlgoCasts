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
  let matrix = createGrid(n);

  for (let recursionCount = 0; recursionCount < n / 2; recursionCount++) {
    let startRow = recursionCount;
    let startColumn = recursionCount;

    borderAlgorithm(matrix, startRow, startColumn);
  }
  return matrix;
}

function borderAlgorithm(matrix, startRow, startColumn) {
  // Fill Right
  let startNumber = startRow == 0 ? 1 : matrix[startRow][startColumn - 1] + 1;
  matrix = fillRight(matrix, startRow, startColumn, startNumber);
  // Fill Down
  let nextNumber = matrix[startRow][matrix.length - (startColumn + 1)] + 1;
  matrix = fillDown(matrix, startRow, startColumn, nextNumber);
  // Fill Left
  nextNumber =
    matrix[matrix.length - (1 + startRow)][matrix.length - (startColumn + 1)] +
    1;
  matrix = fillLeft(matrix, startRow, startColumn, nextNumber);
  // Fill Up
  nextNumber = matrix[matrix.length - (1 + startRow)][startColumn] + 1;
  matrix = fillUp(matrix, startRow, startColumn, nextNumber);
}

// ------------------------------------------------------------------------------------------------------------------------
function fillRight(matrix, startRow, startColumn, newElement) {
  for (let i = startColumn; i < matrix.length - startColumn; i++) {
    matrix[startRow][i] = newElement;
    newElement++;
  }
  return matrix;
}

function fillDown(matrix, startRow, startColumn, newElement) {
  let maxRow = matrix.length - startRow;
  for (let i = startRow + 1; i < maxRow; i++) {
    // Row changes; Column stays fixed.
    matrix[i][matrix.length - (startColumn + 1)] = newElement;
    newElement++;
  }
  return matrix;
}

function fillLeft(matrix, startRow, startColumn, newElement) {
  let humanStartColumn = startColumn + 1;
  for (
    let humanColumn = matrix.length - humanStartColumn;
    humanColumn > humanStartColumn - 1;
    humanColumn--
  ) {
    // Column changes; row stays the same.
    matrix[matrix.length - (1 + startRow)][humanColumn - 1] = newElement;
    newElement++;
  }
  return matrix;
}

function fillUp(matrix, startRow, startColumn, newElement) {
  for (let i = matrix.length - (1 + startRow) - 1; i > startRow; i--) {
    // Column stays the same; row changes.
    matrix[i][startColumn] = newElement;
    newElement++;
  }
  return matrix;
}

// ------------------------------------------------------------------------------------------------------------------------
function createGrid(gridSize) {
  let matrixStructure = [];
  let matrixRow = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      matrixRow.push("A");
    }

    matrixStructure.push(matrixRow);
    matrixRow = [];
  }

  return matrixStructure;
}

// ========================================================================================================================
// Test
console.log(matrix(6));

// ========================================================================================================================
module.exports = matrix;
