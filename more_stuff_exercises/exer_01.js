// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// => [1, 4, 3]

// When array2 is assigned to array1, the variable array2 becomes a pointer to the
// location in memory where the underlying array is located.  

// The contents of the underlying array are modified on line 5, and when we log the array to the console on
// line 6, the variable array2 points to the now-modified array in memory, and logs the
// modified array.  

// Unlike primitives (strings, numbers and booleans), variables that contain arrays don't actually contain the arrays,
// and are insetad pointers to the location in memory where the values of the array are located.  