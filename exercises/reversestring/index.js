// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let newReversedStr;
    var  array = [];

    for (let i = str.length - 1; i >= 0; i--) {
        array.push(str[i])
    }

    newReversedStr = array.join('')
    return newReversedStr
}

module.exports = reverse;
