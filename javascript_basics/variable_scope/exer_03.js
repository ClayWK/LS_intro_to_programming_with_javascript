if (true) {
  let myValue = 20;
}

console.log(myValue);

// It will log a reference error. Although the condition in the if statement will always evaluate 
// to true, and the variable myValue will be initialized to 20, the variable myValue has block
// scope (because it was declared with let), and it will be inaccessible outside of the block 
// in the if statement.  