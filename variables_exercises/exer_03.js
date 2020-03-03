// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// foo will be undefined when it is logged because variables declared with let have block scope.
// Since the declaration of the variable is within the curly braces, the variable will not be available
// outside the curly braces, or outside the block.