const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// The code will raise a TypeError beacuse of the attempted reassignment of a variable declared
// by const.  