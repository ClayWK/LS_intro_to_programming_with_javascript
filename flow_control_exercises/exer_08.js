// Write a function that logs whether a number is between 0 and 50 (inclusive), 
// between 51 and 100 (inclusive), greater than 100, or less than 0.

function range(x) {
  if (x < 0) {
    console.log(x + ' is less than 0');
  } else if (x >= 0 && x <= 50) {
    console.log(x + ' is between 0 and 50');
  } else if (x >=51 && x <= 100) {
    console.log(x + ' is between 51 and 100');
  } else {
    console.log(x + ' is greater than 100');
  }
}

range(-1);
range(0);
range(1);
range(50);
range(51);
range(1000);