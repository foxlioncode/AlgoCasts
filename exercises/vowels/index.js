// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// ========================================================================================================================
// SOLUTION #2 - Regular Expression

function vowels(str) {
    const matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0;
}

// ========================================================================================================================
// SOLUTION #1 - Iterative

// function vowels(str) {
//     let count = 0;
    
//     const checker = ["a", "e", "i", "o", "u"];
    
//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// ========================================================================================================================
// MY SOLUTION
// - Regular Expression
// function vowels(str) {
//   let vowelsRegEx = /[aeiou]/gi;
//   let regexArr = str.match(vowelsRegEx);
//   let mapObject = {};
//   let sum = 0;

//   for (let element of regexArr) {
//     if (!mapObject[element]) {
//       mapObject[element] = 1;
//     } else if (mapObject[element]) {
//       mapObject[element]++;
//     }
//   }

//   for (let element of Object.values(mapObject)) {
//     sum += element;
//   }

//   return sum;
// }

// console.log(vowels("hiiiiee"));;
// ========================================================================================================================
module.exports = vowels;
