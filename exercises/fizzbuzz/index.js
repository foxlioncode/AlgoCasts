// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// ========================================================================================================================
// SOLUTION #1

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {

    // Check if i is a multiple of 3 and 5.
    // if (i % 15 === 0) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");

      // Check if i is a multiple of 3.
    } else if (i % 3 === 0) {
      console.log("fizz");

      // Check if i is a multiple of 5.
    } else if (i % 5 === 0) {
      console.log("buzz");
      
    } else {
      // Print i
      console.log(i);
    }
  }
}

// ========================================================================================================================
// ## MY SOLUTION
// - Remainder
// - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder>

// function fizzBuzz(n) {

// for (let i = 1; i <= n; i++)

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//         console.log('fizz');
//     } else if (i % 5 === 0) {
//         console.log('buzz');
//     } else {
//         console.log(i);
//     }

// }

module.exports = fizzBuzz;
