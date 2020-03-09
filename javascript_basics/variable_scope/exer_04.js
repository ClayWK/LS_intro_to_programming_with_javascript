function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();

// It will log 1. When the function is called, a will be declared with the let keyword, and it will
// have block scope. The condition in the if statement will always evaluate to true, and the code
// within the block will execute. Even though the variable is logged within a further block, code
// within that interior block still has access to the variables in the scope that encloses the 
// block in the if statement.  