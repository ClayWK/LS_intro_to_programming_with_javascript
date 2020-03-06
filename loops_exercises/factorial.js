

function factorialLoop(x) {
  if (x === 0 || x === 1) return 1;
  let fact = x;
  for (let i = x - 1; i > 0; i--) {
    fact = fact*i; 
  }
  return fact;
}

console.log(factorialLoop(3));
console.log(factorialLoop(8));