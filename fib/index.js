// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Memoization function
function memoize(fn) {
  const cache = {};
  return function(...args) {
    //If the results already exists, return them
    if (cache[args]) return cache[args];

    //Else, run the slow original function and cache the results

    cache[args] = fn.apply(this, args);

    return cache[args];
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;
// function fib(n) {
//   const array = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = array[i - 1];
//     const b = array[i - 2];
//     array.push(a + b);
//   }

//   return array[array.length - 1];
// }
