function sum(...args) {
  values = args;

  return values.reduce(function(a, b) {
    return a + b;
  });
}

console.log(sum(1, 4, 5, 6)); // 16

// Use a rest paramater instead of the more verbose arguments object. 
// The rest paramater (...args or ...values) creates an array of all values passed into the
// function that are not explicity defined in the function definition. The array can then be used
// throughout the function, and has access to array methods directly, unlike the arguments object. 