const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// {firstName: 'Jane', lastName: 'Doe'}
// Although the object a is defined with the const keyword, the contents of the object are still
// mutable and can be reassigned. In myFunction, we reassign the firstName property which is 
// accessed through dot notation.  