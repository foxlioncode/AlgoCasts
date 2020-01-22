// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ========================================================================================================================
// SOLUTION #2 - MEMOIZATION

function memoizer(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

fib = memoizer(fib);

// ========================================================================================================================
// SOLUTION #2 - RECURSIVE

// function fib(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// }

// 0 1 1 2 3 5 8 13 21 34 55
// 0 1 2 3 4 5 6 07 08 09 10

// ========================================================================================================================
// MY SOLUTION - ITERATIVE
// function fib(n) {
//   let fibNumber;
//   let fibPartA = 0;
//   let fibPartB = 1;

//   if (n == 0) {
//     return 0;
//   } else if (n == 1) {
//     return fibPartA + fibPartB;
//   } else {
//     for (let i = 1; i < n; i++) {
//       fibNumber = fibPartA + fibPartB;
//       fibPartA = fibPartB;
//       fibPartB = fibNumber;
//     }
//   }
//   return fibNumber;
// }

// 0 1 1 2 3 5 8 13 21 34 55
// 0 1 2 3 4 5 6 07 08 09 10

// ------------------------------------------------------------------------------------------------------------------------
module.exports = fib;
