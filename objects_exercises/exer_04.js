// Create an array from the keys of object obj below, with all values converted to uppercase. 
// Your implementation must not mutate obj.
// The order of the array does not matter.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj).map(elem => elem.toUpperCase());

console.log(arr);
console.log(obj);