// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution 3 - Will wow the interviewer
function reverse(str) {
  //Might want to read how reduce really works again!
  return str.split("").reduce((acc, cur) => cur + acc, "");
}

module.exports = reverse;

//Solution 2 - OK solution
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) reversed = character + reversed;

//   return reversed;
// }

//Solution 1 - The most concise
// function reverse(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
