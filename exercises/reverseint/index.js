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
// ## HINTS
// - Number.prototype.toString()
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString>
// - Math.sign()
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign>
// - parseInt()
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt>

// ========================================================================================================================
// ## SOLUTION #1 - Math.sign()
// The Math.sign() function returns either a positive or negative +/- 1.

function reverseInt(n) {
  return (
    parseInt(
      n
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(n)
  );
}

// ========================================================================================================================
// ## MY SOLUTION - HINTS

// function reverseInt(n) {
//   // Positive Number
//   if (n > 0) {
//     return parseInt(
//       n
//         .toString()
//         .split("")
//         .reverse()
//         .join("")
//     );
//     // Zero
//   } else if (n === 0) {
//     return 0;
//     // Negative Number
//   } else {
//     n = n * -1;
//     return (
//       parseInt(
//         n
//           .toString()
//           .split("")
//           .reverse()
//           .join("")
//       ) * -1
//     );
//   }
// }

// ========================================================================================================================
// ## MY SOLUTION (20mins)

// function reverseInt(n) {
//   // Convert int to str
//   let revInt;

//   // Handle Negative
//   if (n < 0) {
//     revInt = String(n * -1);
//     revInt =
//       Number(
//         revInt
//           .split("")
//           .reverse()
//           .join("")
//       ) * -1;
//     //   revInt = revInt * -1;
//     return revInt;
//     // Handle Zero
//   } else if (n == 0) {
//     return 0;
//     // Handle Positive Number
//   } else {
//     revInt = String(n);
//     revInt = Number(
//       revInt
//         .split("")
//         .reverse()
//         .join("")
//     );
//     return revInt;
//   }
// }

module.exports = reverseInt;
