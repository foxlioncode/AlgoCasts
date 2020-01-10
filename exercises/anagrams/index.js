// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ========================================================================================================================
// SOLUTION #1

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  
  return true;
}

// Helper Function - Build a character map for each string.
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// ========================================================================================================================
// // MY SOLUTION
// // - RegExp
// // - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions>
// // - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>
// // - String.prototype.replace()
// // - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>
// // - String.prototype.toLowerCase()
// // - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase>

// function anagrams(stringA, stringB) {
//   let mapObjectA = mapObjectArrFunction(stringA, stringB)[0];
//   let mapObjectB = mapObjectArrFunction(stringA, stringB)[1];

//   console.log("mapObjectA", mapObjectA);
//   console.log("mapObjectB", mapObjectB);
//   let mapObjectAKeys = Object.keys(mapObjectA);
//   let mapObjectBKeys = Object.keys(mapObjectB);
//   let mapObjectAValues = Object.values(mapObjectA);
//   let mapObjectBValues = Object.values(mapObjectB);

//   if (mapObjectAKeys.length != mapObjectBKeys.length) {
//     return false;
//   } else {
//     let returnValue;
//     for (let element of mapObjectAKeys) {
//       if (!mapObjectBKeys.includes(element)) {
//         returnValue = false;
//       } else {
//         returnValue = true;
//       }
//     }
//     return returnValue;
//   }
// }

// function mapObjectArrFunction(stringA, stringB) {
//   let cleanStrArr = cleanStrArrFunction(stringA, stringB);
//   //   ------------------------------------------------------------------------------------------------------------------------
//   // Create comparison object from clean strings.
//   let mapObjectArr = [];
//   for (let cleanStr of cleanStrArr) {
//     mapObjectArr.push(mapString(cleanStr));
//   }
//   return mapObjectArr;
// }

// //   ------------------------------------------------------------------------------------------------------------------------
// // Clean up the two strings.
// function cleanStrArrFunction(stringA, stringB) {
//   let strArr = [stringA, stringB];
//   let cleanStrArr = [];
//   let cleanStrA = stringA;
//   let cleanStrB = "";
//   // Regex Syntax `/pattern/flags`
//   const regexWhiteSpace = /\s/g;
//   const regexSpecialCharacters = /\W/g;
//   for (let strArrayElement of strArr) {
//     strArrayElement = strArrayElement.replace(regexWhiteSpace, "");
//     strArrayElement = strArrayElement.replace(regexSpecialCharacters, "");
//     strArrayElement = strArrayElement.toLowerCase();
//     cleanStrArr.push(strArrayElement);
//   }
//   // Return cleanStrArr
//   return cleanStrArr;
// }

// //   ------------------------------------------------------------------------------------------------------------------------
// // Map each cleaned string.
// function mapString(str) {
//   let strMapObject = {};
//   for (let char of str) {
//     if (!strMapObject[char]) {
//       strMapObject[char] = 1;
//     } else {
//       strMapObject[char]++;
//     }
//   }
//   return strMapObject;
// }

// ========================================================================================================================
module.exports = anagrams;
