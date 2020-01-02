// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// SOLUTION #2
function reverse(str) {

    // Declare an empty string.
    let reversed = '';

    // Avoid classic for loop syntax because it is easy to introduce mistakes with this long form.
    // for ... of
    // <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>
    // May not work for nth element iteraction.
    
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

module.exports = reverse;
