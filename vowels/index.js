// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //.match() returns all matches in array or null
  //g is to go through all the str elements
  //As it will stop matching after the first match is found
  //i is for Case Insensetive
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   const vowels = "aeiou";
//   let noOfVowels = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) noOfVowels++;
//   }

//   return noOfVowels;
// }
