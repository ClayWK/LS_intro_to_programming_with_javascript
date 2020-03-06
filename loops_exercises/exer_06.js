function factorial(x) {
  if (x === 0 || x === 1) {
    return 1;
  } else if (x > 1) {
    return x * factorial(x-1);
  }
}

console.log(factorial(3));
console.log(factorial(8));