// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// ========================================================================================================================
// MY SOLUTION (20mins)
function reverseInt(n) {
  // Convert int to str
  let revInt;

  // Handle Negative
  if (n < 0) {
    revInt = String(n * -1);
    revInt =
      Number(
        revInt
          .split("")
          .reverse()
          .join("")
      ) * -1;
    //   revInt = revInt * -1;
    return revInt;
    // Handle Zero
  } else if (n == 0) {
    return 0;
    // Handle Positive Number
  } else {
    revInt = String(n);
    revInt = Number(
      revInt
        .split("")
        .reverse()
        .join("")
    );
    return revInt;
  }
}

module.exports = reverseInt;
