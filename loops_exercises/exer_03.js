//The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// An assignment operator (=) is used instead of the strict equality operator (===).
// In the while loop, counter is assigned to 1 at each iterator through the loop, so the increment in the
// block never functionally takes effect since the counter is always being reset to 1 and only incremented once.  