// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// ========================================================================================================================
// SOLUTION #2 - Recursive

function pyramid(n, row = 0, level = '') {
  // - Set up base case correctly.
  if (row === n) {
    return;
  }
  // - Detect when at end of a column.
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  // - Decide whether to add space or pound to the string.
  // - Midpoint calculation.
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  // - Determine when to add a # and when to add a space.
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, level + add);
}

// ========================================================================================================================
// SOLUTION #1 - Iterative

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";

//     // Think about how 'n' is related to the pattern.
//     for (let column = 0; column < 2 * n - 1; column++) {
//       // Calculate center index.
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }

//     console.log(level);
//   }
// }

// ========================================================================================================================
// MY SOLUTION
// - Hint
// - Math.floor()
// - Method Chaining
// - Callback Pattern

// function pyramid(n) {
//   let countSpaces = n;
//   let countPounds = 1;
//   for (let i = 0; i < n; i++) {
//     // let spacesAddStr = printSpaces('', countSpaces);
//     // let poundsAddStr = printPounds(spacesAddStr, countPounds);
//     // let finalSpacesAddStr = printSpaces(poundsAddStr, countSpaces);
//     let finalSpacesAddStr = printSpaces(printPounds(printSpaces('', countSpaces), countPounds), countSpaces);
//     console.log(finalSpacesAddStr);
//     countSpaces--;
//     countPounds += 2;
//   }
// }

// function printPounds(str, n) {
//   while (n > 0) {
//     str += "#";
//     n--;
//   }
//   return str;
// }

// function printSpaces(str, n) {
//   n = (n * 2 - 2) / 2;
//   while (n > 0) {
//     str += ' ';
//     n--;
//   }
//   return str;
// }

// pyramid(10);

// ========================================================================================================================
module.exports = pyramid;
