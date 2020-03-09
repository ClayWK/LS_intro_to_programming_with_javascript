console.log(greeting);

var greeting = 'Hello world!';

// the variable greeting is in the global scope, but is not defined until after we try to log
// it to the console. 

// => 'Hello world!'

// Even though the variable is not defined yet, because it is in the variable scope, we have
// access to it.  

// UPDATE: It logs undefined.  All variables in JavaScript declared with var are hoisted, meaning 
// they are virtually moved to the beginning of the scope. This means that our code snippet above 
// behaves like the following one:

var greeting;

console.log(greeting);

greeting = 'Hello world!'

// When a var variable is declared but not assigned a value, like on line 1, it is initialized to 
// the value undefined. For that reason, the code logs undefined to the console.