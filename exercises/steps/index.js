// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ========================================================================================================================
// SOLUTION #1 - Iterative/Matrix Solution
// - Rows
// - Columns

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

// ========================================================================================================================
// MY SOLUTION

// function steps(n) {
//   let countPounds = 0;
//   let countSpaces = n;
//   for (let i = 0; i <= n; i++) {
//     if (i === 0) {
//       countPounds++;
//       countSpaces--;
//     } else {
//       console.log(addSpaces(addPounds(countPounds), countSpaces));
//       countPounds++;
//       countSpaces--;
//     }
//   }
// }

// function addPounds(numberOfPounds) {
//   let poundsOutput = "";
//   let count = 0;
//   while (count < numberOfPounds) {
//     poundsOutput += "#";
//     count++;
//   }
//   return poundsOutput;
// }

// function addSpaces(inputString, numberOfSpaces) {
//   let spacesOutput = inputString;
//   let count = 0;
//   while (count < numberOfSpaces) {
//     spacesOutput += " ";
//     count++;
//   }
//   return spacesOutput;
// }

// steps(5);

// ========================================================================================================================
module.exports = steps;
