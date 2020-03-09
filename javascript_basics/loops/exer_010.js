let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// The difference between the snippets is that the code in the block of the first snippet will not execute, since the
// while condition is not met.  In the second snippet, the code in the block will execute once, since a do ... while loop
// executes the code once before checking whether the looping condition is met. 