let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);

// It logs 2. The variable b has global scope and is passed as an argument to myFunction when it
// is invoked. The function then logs the value passed to it. It does not matter than inside the
// myFunction definition it refers to the paramter as 'a' since that is just a placeholder. 