// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ========================================================================================================================
// MY SOLUTION - MAXCHAR
function maxChar(str) {
  // Determine the unique characters in the string.
  // Array.prototype.includes()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  let uniqueCharactersArr = [];

  for (let element of str) {
    if (uniqueCharactersArr.includes(element)) {
      break;
    } else {
      uniqueCharactersArr.push(element);
    }
  }

  //   console.log(uniqueCharactersArr);

  // ------------------------------------------------------------------------------------------------------------------------
  // Count each unique value.

  var count = 0;
  var countArr = [];

  for (let i = 0; i < uniqueCharactersArr.length; i++) {
    for (let element of str) {
      //   console.log(uniqueCharactersArr[i]);
      //   console.log(element);
      //   debugger;
      if (uniqueCharactersArr[i] == element) {
        count++;
      } else {
        continue;
      }
      //   console.log(count);
    }
    countArr.push(count);
    count = 0;
    // console.log("\n");
  }

  // ------------------------------------------------------------------------------------------------------------------------
  // Return character with the maximum count value.
  // Spread syntax
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // Array.prototype.indexOf()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

  // console.log(countArr);
  let indexMaxChar = countArr.indexOf(Math.max(...countArr));
  return uniqueCharactersArr[indexMaxChar];

  // return uniqueCharacter;
}

// ------------------------------------------------------------------------------------------------------------------------
// [ ] TODO: What should be returned when there are an even number of letters? All letters should be returned.
// console.log(maxChar('fffgggiii'));

module.exports = maxChar;
