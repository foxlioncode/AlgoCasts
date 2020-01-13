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

function pyramid(n) {
  let countSpaces = n;
  let countPounds = 1;
  for (let i = 0; i < n; i++) {
    let pyramidStr = "";

    let spacesAddStr;
    let poundsAddStr;
    let finalSpacesAddStr;

    spacesAddStr = printSpaces(pyramidStr, countSpaces);
    poundsAddStr = printPounds(spacesAddStr, countPounds);
    finalSpacesAddStr = printSpaces(poundsAddStr, countSpaces);

    console.log(finalSpacesAddStr);
    countSpaces--;
    countPounds += 2;
  }
}

function printPounds(str, n) {
  let numberPounds = n;
  let poundsString = str;

  while (numberPounds > 0) {
    poundsString += "#";
    numberPounds--;
  }

  return poundsString;
}

function printSpaces(str, n) {
  let spacesStr = str;
  let loopCount = n;

  loopCount = (loopCount * 2 - 2) / 2;
  while (loopCount > 0) {
    spacesStr += " ";
    loopCount--;
  }

  return spacesStr;
}

pyramid(9);

// ========================================================================================================================
module.exports = pyramid;
