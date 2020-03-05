// Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:
// Return true or false depending on each result.

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkFor3(arr) {
  let test = arr.filter((num) => num === 3);
  if (test.length > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkFor3(numbers1));
console.log(checkFor3(numbers2));
console.log(checkFor3(numbers3));

// Easier solution:

numbers1.includes(3);  // => true
numbers2.includes(3);  // => false
numbers3.includes(3);  // => false