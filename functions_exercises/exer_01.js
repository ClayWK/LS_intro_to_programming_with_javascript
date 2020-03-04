let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

// It logs 1.
// Executing the foo function does not affect the output. It does not affect
// the output because the scope of the assignment of bar's value to 2 has
// functional scope, and when we log the value of bar to the console,
// we are outside the scope of the foo function.  If we logged the value of bar
// to the console within the foo function, it would log 2. However, since we
// log the value of bar to the console outside of the function after the
// function is done running, the assignment of 2 as the value of bar is now
// outside the scope, and we return to the globally scoped bar = 1.