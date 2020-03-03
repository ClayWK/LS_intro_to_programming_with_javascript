// What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// Each set of greetings will be the same, all of them addressing Victor.
// When line 8 attempts to reassign NAME to Joe, there will be a Type Error because the code
// is trying to assign a new value to a constant variable.