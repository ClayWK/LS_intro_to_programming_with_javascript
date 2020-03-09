function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();

// it will cause a reference error since a is undefined the first time the program tries to log it.
// Although the first time a is declared with let, that variable has block scope that also 
// includes the inner scope within the if statement, there is a separate declaration of a within
// the inner block scope that shadows the variable in the outer scope. JS knows the outer scoped
// variable is shadowed, so we don't have access to it. When we try to log a to the console in the
// if statement, the a that has the inner block scope has not yet been defined, and the code
// will raise a ReferenceError.  

// JS hoists variables declared by let, as it does for var, but variables declared with let
// (unlike var) occuopy a 'temporal dead zone' where they have no value, not even a value of
// undefined, as is the case when varibales declared by var are hoisted.  