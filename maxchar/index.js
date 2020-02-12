// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //Convert the str into object
  //The values should be the no. of occurances
  //The obj keys should be the str chars

  let obj = {};

  for (let char of str) obj[char] = obj[char] + 1 || 1;

  //Use a for loop to get the max value property i.e. key

  let maxValue = 0;
  let maxKey = "";

  for (let key in obj) {
    if (maxValue < obj[key]) {
      maxValue = obj[key];
      maxKey = key;
    }
  }

  return maxKey;
}

module.exports = maxChar;
