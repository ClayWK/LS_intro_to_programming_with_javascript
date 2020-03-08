// What do the following error message and stack trace tell you?

/*

$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

*/

//  A javascript file name exercise2 was run with node. That file is located in a directory named
// /Users/wolfy/tmp
// A Reference Error occured when the program tried to log the variable greeting to the console.
// The ReferenceError occurred because greeting is not defined.
// The error occured on line 4 at column 15 in the program and at line 13 in column 1.
// There is a reference to the error occurring at Object.<anonymous> because the stack trace treats 
// everything in the global scope as part of an anonymous object..
// The rest of the error message is related to node and doesn't specifically reference the code in our program. 

// More specifically the first line of the stack trace tells us that the error comes from line 4 of the program
// in the hello function, and that the hello function is called on line 13.  
