// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION #3
function reverse(str) {

    // Reduce helper takes all values in array and condenses it down into a single string value.
    // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>
    return str.split('').reduce((reversed, character) => character + reversed, '')

}

module.exports = reverse;
