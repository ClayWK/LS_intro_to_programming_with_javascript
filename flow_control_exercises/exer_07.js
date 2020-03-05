// Write a function that takes a string as an argument and returns an all-caps version of the string 
// when the string is longer than 10 characters. Otherwise, it should return the original string. 
// Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.

function allCapsIfLong(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(allCapsIfLong('hello world'));
console.log(allCapsIfLong('goodbye'));