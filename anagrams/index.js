// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStrA = cleanString(stringA);
  const cleanStrB = cleanString(stringB);

  const sortedA = cleanStrA
    .split("")
    .sort()
    .join("");
  const sortedB = cleanStrB
    .split("")
    .sort()
    .join("");

  return sortedA === sortedB;
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}

// function toCharMap(str) {
//   const charMap = {};

//   for (let char of str) charMap[char] = charMap[char] + 1 || 1;

//   return charMap;
// }

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const charMapA = toCharMap(cleanString(stringA));
//   const charMapB = toCharMap(cleanString(stringB));

//   //Check the length for cases like Hello and Hellos
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false;

//   for (let key in charMapA) {
//     if (key in charMapB) {
//       if (charMapA[key] === charMapB[key]) return true;
//     }
//   }

//   return false;
// }
