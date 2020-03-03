/*

Explain why this code logs '510' instead of 15.

console.log('5' + 10);

In this code, '5' is a string and 10 is a number. When using the + operator on a string and a number, javascript will coerce
the number into a string through implicit type conversion, and then concatenate the strings.

*/