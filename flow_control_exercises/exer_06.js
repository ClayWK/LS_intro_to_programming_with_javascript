// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// The falsy values in javascript are 0, an empty string, false, null, NaN, and undefined.  
// The answer here depends on whether an empty array is treated as one of the above falsy values.  
// My first guess would be that an empty array may be treated as 'undefined' and thus falsy.

// My guess was wrong. This returns 'Not empty,' so clearly even an empty array has a truty value.