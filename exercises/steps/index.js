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
// SOLUTION #2 - Recursion
// - Recursion Tips
//     - Figure out the bare minimum pieces of infomraiton to represent your problem.
//     - Give reasonable defaults to the bare minimum pieces of information.
//     - Check the base case. Is there any work left to do? If not, return.
//     - Do some work. Call your function again, making sure the arguments have changed in some fashion.

// function printNumber(n, dec = 1) {
// // Identify the base case, where there is no more work to do and to return the function. Nailing your base case is very important. Do it at the beginning.
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
// // This is the recursive step.
//   printNumber(n - dec);
// }
// printNumber(10);

function steps(n, row = 0, stair = "") {
  // Check the base case.
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  steps(n, row, stair);

}

// ========================================================================================================================
// SOLUTION #1 - Iterative/Matrix Solution
// - Rows
// - Columns

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

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
