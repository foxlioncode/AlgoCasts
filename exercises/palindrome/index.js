// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ========================================================================================================================
// - SOLUTION #2
//     - Use array helper .every().
//     - Compare first character with last character and see if they are equal.

function palindrome(str) {
    // - Array.prototype.every()
    //     - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every>
    //     - Checks whether every element in an array passes a test implemented by a function and returns a boolean.

    // Convert str to arr
    return str.split('').every(checkIfCharacterSame);

}

var checkIfCharacterSame = (char, i, arr) => {
    return char === arr[arr.length - i - 1];
}

// function checkIfCharacterSame (character, i, arr) {
//     return character === arr[arr.length - i - 1];
// }

// ========================================================================================================================
// - SOLUTION #1
//     - Most straightforward/direct solution.

// function palindrome(str) {
//     // Reverse str
//     const reversed = str.split('').reverse().join('');

//     // Direct comparison
//     return str === reversed;
// }

// palindrome('hello')

// ========================================================================================================================
// - SOLVED (20mins)
//     - Did not remember how to reverse a string.
// function palindrome(str) {

//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     if (str === reversed) {
//         return true
//     } else {
//         return false
//     }

// }

// ========================================================================================================================
module.exports = palindrome;
