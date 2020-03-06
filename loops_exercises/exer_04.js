// Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// The for loop is missing the third element, which would typically increment or decrement the counter.
// I'm not sure if javasript will allow you to run code missing that third element, but I suspect it 
// will allow the code to run without raising an error, since the increment could be built into the block
// if the programmer desired.

// it will log 
// 1
// 2
// 3
// 4... etc in an infinite loop

// UPDATE: It logs 1, 2, 3, 4, 5 to the console, and does not raise an error. All three elements
// of the for loop are optional in javascript. Further, i is actually incremented in the block
// before it is logged to the console. The fact that the incrementation occurs within a console
// log function doesn't make the incrementation not become effective.   