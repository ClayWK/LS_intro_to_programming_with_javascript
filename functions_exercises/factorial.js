function times (number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

function factorial (x) {
 if (x < 1) {
    console.log("Not a valid number.\n");
 }
 else if (x === 1) {
   console.log(1);
   return 1;
 }
 else if (x > 1) {
   let fact = times(x, factorial(x - 1));
   return fact;
 }
}

factorial(5);