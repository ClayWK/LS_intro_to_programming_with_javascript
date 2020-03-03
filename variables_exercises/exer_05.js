// What does this program log to the console? Why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// The first assignment to the foo variable has global scope.
// Within the block where foo is reassigned, the variable only has block scope.
// When the program logs the variable, we are outside the block scope.
// Although the assignent of foo to qux shadows the value assigned on line 1,
// the assignment in line 5 is cleaned up once the block ends and the assignent to
// bar is still in global scope.

// Question: How are these two different variables stored in memory?