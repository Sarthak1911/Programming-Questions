// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  //Base case
  if (row === n) return;

  //Case to go to the next level
  if (level.length === 2 * n - 1) {
    console.log(level);
    //Start a new row
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;

  //Decide to put a # or a _
  if (midpoint - row <= level.length && midpoint + row >= level.length)
    add = "#";
  else add = " ";

  //Same row, add characters
  pyramid(n, row, level + add);
}

module.exports = pyramid;

// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";

//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) level += "#";
//       else level += " ";
//     }

//     console.log(level);
//   }
// }
