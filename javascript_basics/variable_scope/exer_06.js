let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// It logs false. The variable declared by let within the if block only has block scope, and is a
// separate variable than the variable b declared by let on line 2 that has global scope. 
// When we log b to the console on line 8, we are logging the varibale in global scope.