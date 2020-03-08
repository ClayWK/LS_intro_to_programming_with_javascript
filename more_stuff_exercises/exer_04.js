// Given a list of numbers, write some code to find and display the largest numeric value in the list.


// This function only works if the list is an array.  
function largest(list) {
  console.log(Math.max(...list));
}

largest([1, 2, 3, 4]);  
// If we run the largest function on (1, 2, 3, 4), we gt a TypeError because of a non-callable iterator.  

// Otherwise we can just run the below wihout a function

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));