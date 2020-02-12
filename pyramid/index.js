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

function pyramid(n) {
  let stair = "";
  for (let i = n; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      stair += " ";
    }

    for (let h = 0; h <= n - i - 2; h++) {
      stair += "#";
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      stair += "#";
    }

    for (let h = 0; h <= n - i - 1; h++) {
      stair += " ";
    }
    console.log(stair);
  }
}

pyramid(3);
module.exports = pyramid;
