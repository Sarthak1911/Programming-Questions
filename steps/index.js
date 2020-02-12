// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
  //Base case to stop the recurssion
  if (row === n) return;

  //This happens when the row is filled by n number of characters
  if (stair.length === n) {
    console.log(stair);
    //Need to start another row
    return steps(n, row + 1);
  }

  //Still building a row
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  //Here we dont increment the row, as the row is still being build
  steps(n, row, stair);
}

steps(3);

module.exports = steps;

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     //Row processing
//     for (let column = 0; column <= row; column++) {
//       //Column processing
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let steps = "";
//     for (let j = 0; j <= i; j++) {
//       steps = steps + "#";
//     }

//     for (let h = 0; h < n - i - 1; h++) {
//       steps = steps + " ";
//     }
//     console.log(steps);
//   }
// }
