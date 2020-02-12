// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let caplitalized = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      caplitalized += str[i].toUpperCase();
    } else {
      caplitalized += str[i];
    }
  }

  return caplitalized;
}

module.exports = capitalize;

capitalize("a lazy fox");

// Solution 1 - The Best one
// function capitalize(str) {
//   return str
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }
