// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ========================================================================================================================
// SOLUTION #2

function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

// ========================================================================================================================
// SOLUTION #1
// Array.prototype.slice()f
// - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice>
// String.prototype.toUpperCase()
// - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase>

// function capitalize(str) {
//     const words = [];
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return words.join(' ');
// }

// ========================================================================================================================
// MY SOLUTION
// function capitalize(str) {
//   let strArr = str.split(" ");
//   let capStrArr = [];

//   for (let element of strArr) {
//     capStrArr.push(capFirstLetterStr(element));
//   }

//   return capStrArr.join(" ");
// }

// function capFirstLetterStr(str) {
//   let firstLetterCapStr = str.split("");
//   firstLetterCapStr[0] = firstLetterCapStr[0].toUpperCase();
//   return firstLetterCapStr.join("");
// }

module.exports = capitalize;
