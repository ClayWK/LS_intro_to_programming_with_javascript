// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// The code should produce a type error when run because of the reassignment of a constant value.

// UPDATE: No error is produced. Because of the difference in scope, the two const variables are
// actually separate variables.

// Question: How are the variables stored in memory here?