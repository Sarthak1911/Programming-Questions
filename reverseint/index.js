// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Solution 2 - Does check for -0
function reverseInt(n) {
  if (!Math.abs(n)) return 0;

  //Convert to positive using Math.abs()
  //Convert to string and reverse
  const reversed = Math.abs(n)
    .toString()
    .split("")
    .reverse()
    .join("");

  //Convert back to integer
  //Retain the sign
  //Might want to check documentation of Math.sign()
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

//Solution 1 - Does not check for -0 - Will work in most cases
// function reverseInt(n) {
//   //Convert to positive using Math.abs()
//   //Convert to string and reverse
//   const reversed = Math.abs(n)
//     .toString()
//     .split("")
//     .reverse()
//     .join("");

//   //Convert back to integer
//   //Retain the sign
//   //Might want to check documentation of Math.sign()
//   return parseInt(reversed) * Math.sign(n);
// }
