// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ========================================================================================================================
// - SOLUTION #1
//     - Most straightforward/direct solution.

function palindrome(str) {
    // Reverse str
    const reversed = str.split('').reverse().join('');

    // Direct comparison
    return str === reversed;
}

palindrome('hello')

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
