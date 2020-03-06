// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// hi
// hi
// When the bar function runs, foo, as argument1, has its a property accessed through dot notation
// and the corresponding value is reassigned to 'hi'.

// When the bar functions runs, qux, as argument2, is reassigned to the string 'hi'. 

// UPDATE: It logs:
// hi
// hello
// Clearly, the assignment happening within the bar function does not mutate qux. If we logged argument2 to the
// console after the assignment in the bar function, it would log 'hi.' 
// This happens because objects are mutable and strings, and other primitives, are not.  
// In addition, varibale reassignment, such as what happens to argument2 in the bar function, does not
// mutate the object even if that object is mutable. 