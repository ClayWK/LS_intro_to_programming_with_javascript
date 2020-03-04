let rlSync = require('readline-sync');

function multiply (a, b) {
  return a * b;
}

let a = rlSync.question('Enter the first number: ');
let b = rlSync.question('Enter the second number: ');

console.log(`${a} * ${b} = ${multiply(a, b)}`);