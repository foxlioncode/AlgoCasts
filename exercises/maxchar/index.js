// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ========================================================================================================================
// ## Common String Questions
// - What is the most common character in a string?
// - Does string 'A' have the same characters as string 'B' (is it an anagram)?
// - Does a given string have any repeated characters in it?
// - Does it ask you to Count or verify the number of characters in a string?

// ========================================================================================================================
// SOLUTION #1 - Ternary operator (Conditional operator); For ... In Loop

// This function creates the correct data structure for analysis, a character map.
function maxChar(str) {
  let mappedObject = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    // if ... else
    // if (mappedObject[char]) {
    //   mappedObject[char]++;
    // } else {
    //   mappedObject[char] = 1;
    // }

    // Ternary Operator
    // mappedObject[char] = (mappedObject[char])?  mappedObject[char]++ : mappedObject[char] = 1;

    // or || Operator
    mappedObject[char] = mappedObject[char] + 1 || 1;
  }

  for (let char in mappedObject) {
    if (mappedObject[char] > max) {
      max = mappedObject[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// ========================================================================================================================
// SOLUTION #1 - .reduce()

// function maxChar(str) {
//   let mappedObject = {};

//   for (let char of str) {
//     if (mappedObject[char]) {
//       mappedObject[char]++;
//     } else {
//       mappedObject[char] = 1;
//     }
//   }

//   let mappedObjectValuesArr = [];

//   mappedObjectValuesArr = Object.values(mappedObject);

//   let maxValue;
//   let maxValueIndex;
//   let maxKeyIndex;

//   let reducer = (accumulator, currentValue) => {
//     // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#Getting_the_maximum_element_of_an_array>
//     return Math.max(accumulator, currentValue);
//   };

//   // return mappedObjectValuesArr.indexOf(mappedObjectValuesArr.reduce(reducer));
//   maxValue = mappedObjectValuesArr.reduce(reducer);
//   maxValueIndex = mappedObjectValuesArr.indexOf(maxValue);

//   return Object.keys(mappedObject)[maxValueIndex];
// }

// console.log(maxChar("helllloo"));

// Use reduce() to find max value.
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>

// ........................................................................................................................
// SOLUTION #1 - My solution.
// function maxChar(str) {
//   var mappedObject = {};

//   for (let char of str) {
//     if (!mappedObject[char]) {
//       mappedObject[char] = 1;
//     } else {
//       mappedObject[char]++;
//     }
//   }

//   // ........................................................................................................................
//   // Find which char has the highest count.
//   // Math.max()
//   // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max>
//   // Object.values()
//   // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values>
//   // ... Spread
//   // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
//   // Array.prototype.indexOf()
//   // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf>

//   let mappedObjectValuesArrArr = Object.values(mappedObject);

//   let indexMaxMappedObject = mappedObjectValuesArrArr.indexOf(
//     Math.max(...mappedObjectValuesArrArr)
//   );

//   return Object.keys(mappedObject)[indexMaxMappedObject];
// }

// console.log(maxChar("bbbzzz"));

// ========================================================================================================================
// ## HINTS
// - Convert string into an object.
// - Key-value pair will be the letter of each string paired with then number of occurrences each letter repeats for.
// - You essentially need to create this map object.

// - .forEach()
//     - Used in arrays.
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach>
// - for ... of
//     - Used in arrays.
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>
// - for ... in
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in>
// - in
//     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in>

// - String to Map Object
// - Loop through each character and add it as a property to object, then set value to 1.
// const string = 'hello';
// const charsObject = {};

// for (let char of string) {
//   if (!charsObject[char]) {
//     charsObject[char] = 1;
//   } else {
//     charsObject[char]++;
//   }
// }

// console.log(charsObject);

// ........................................................................................................................
// constructor
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor>
// Object.entries()
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries>

// class StrToObj {
//   constructor(str) {
//     let uniqueCharactersArr = [];

//     for (let char of str) {
//       if (uniqueCharactersArr.includes(char)) {
//         break;
//       } else {
//         uniqueCharactersArr.push(char);
//       }
//     }

//     for (let char of uniqueCharactersArr) {
//       this.h = char;
//     }
//   }
// }

// var testCharMap = new StrToObj('hello')
// console.log(testCharMap);

// ========================================================================================================================
// ## MY SOLUTION - MAXCHAR
// function maxChar(str) {
//   // - Determine the unique characters in the string.
//   // - Array.prototype.includes()
//   // - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes>
//   let uniqueCharactersArr = [];

//   for (let element of str) {
//     if (uniqueCharactersArr.includes(element)) {
//       break;
//     } else {
//       uniqueCharactersArr.push(element);
//     }
//   }

//   //   console.log(uniqueCharactersArr);

//   // ------------------------------------------------------------------------------------------------------------------------
//   // - Count each unique value.

//   var count = 0;
//   var countArr = [];

//   for (let i = 0; i < uniqueCharactersArr.length; i++) {
//     for (let element of str) {
//       //   console.log(uniqueCharactersArr[i]);
//       //   console.log(element);
//       //   debugger;
//       if (uniqueCharactersArr[i] == element) {
//         count++;
//       } else {
//         continue;
//       }
//       //   console.log(count);
//     }
//     countArr.push(count);
//     count = 0;
//     // console.log("\n");
//   }

//   // ------------------------------------------------------------------------------------------------------------------------
//   // - Return character with the maximum count value.
//   // - Spread syntax
//   //     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax>
//   // - Array.prototype.indexOf()
//   //     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf>

//   // console.log(countArr);
//   let indexMaxChar = countArr.indexOf(Math.max(...countArr));
//   return uniqueCharactersArr[indexMaxChar];

//   // return uniqueCharacter;
// }

// ------------------------------------------------------------------------------------------------------------------------
// [ ] TODO: What should be returned when there are an even number of letters? All letters should be returned.
// console.log(maxChar('fffgggiii'));

module.exports = maxChar;
