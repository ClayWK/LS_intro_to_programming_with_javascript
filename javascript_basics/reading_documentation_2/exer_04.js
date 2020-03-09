// Find the MDN documentation on operator precedence, and use it to find out which result the 
// expression 4 * 5 + 3 ** 2 / 10 evaluates to.

// The code contains the following, which have the following precedence (higher numbers have higher precedence)
// multiplication: 15
// addition: 14
// exponentiation: 16 
// division: 15

// We could re-write with parantheses as follows:
// (4 * 5) + ((3 ** 2) / 10) => 20 + 0.9 => 20.9
console.log(4 * 5 + 3 ** 2 / 10);