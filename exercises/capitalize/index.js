// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split(" ");
  let capStrArr = [];

  for (let element of strArr) {
    capStrArr.push(capFirstLetterStr(element));
  }

  return capStrArr.join(" ");
}

function capFirstLetterStr(str) {
  let firstLetterCapStr = str.split("");
  firstLetterCapStr[0] = firstLetterCapStr[0].toUpperCase();
  return firstLetterCapStr.join("");
}

module.exports = capitalize;
