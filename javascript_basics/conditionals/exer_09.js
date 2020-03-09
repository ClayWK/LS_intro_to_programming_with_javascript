let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// => '$3.99' when admissionPrice is assigned, the ternary operator will return the second value 
// since !sale is a falsy value in this case (where sale = true).