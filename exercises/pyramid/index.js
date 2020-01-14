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
// MY SOLUTION
// Hint
// - Math.floor()
// - Method Chaining
// - Callback Pattern
function pyramid(n) {
  let countSpaces = n;
  let countPounds = 1;
  for (let i = 0; i < n; i++) {
    // let spacesAddStr = printSpaces('', countSpaces);
    // let poundsAddStr = printPounds(spacesAddStr, countPounds);
    // let finalSpacesAddStr = printSpaces(poundsAddStr, countSpaces);
    let finalSpacesAddStr = printSpaces(printPounds(printSpaces('', countSpaces), countPounds), countSpaces);
    console.log(finalSpacesAddStr);
    countSpaces--;
    countPounds += 2;
  }
}

function printPounds(str, n) {
  while (n > 0) {
    str += "#";
    n--;
  }
  return str;
}

function printSpaces(str, n) {
  n = (n * 2 - 2) / 2;
  while (n > 0) {
    str += ' ';
    n--;
  }
  return str;
}

// pyramid(10);

// ========================================================================================================================
module.exports = pyramid;
