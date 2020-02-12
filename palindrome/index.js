// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution 2 - Not some optimized - as the later half of the array is also compared which is a waste, but wow solution as we use every()
function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = palindrome;

//Solution 1 - Concise Solution
// function palindrome(str) {
//   return (
//     str
//       .split("")
//       .reverse()
//       .join("") === str
//   );
// }
