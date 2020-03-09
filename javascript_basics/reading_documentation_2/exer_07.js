// How many arguments does the Array.prototype.join() method expect? 
// What happens if you call it with less or more arguments?

// The method expects one argument.
// If the method recieves no arguments, it assumes a ',' as the argument, which will separate the
// values from the array with a comma.

// I suspect if more than one arguent was supplied, the function would either ignore the extra arguments
// or raise an error. //UPDATE: It ignores the additional arguments.  

let arr = ['one', 'two', 'three'];
let str = arr.join();
let str2 = arr.join(',');
let str3 = arr.join(',', 15);

console.log(str);
console.log(str2);
console.log(str3);