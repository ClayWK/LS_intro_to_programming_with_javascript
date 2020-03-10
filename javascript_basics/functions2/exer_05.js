function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
// logs: Kirk, James T.

// Use the spread operator. Instead of calling each indexed element of the array, using the spread
// operator syntax (...nameOfArrayOrOtherIterable) allows us to pass the full contents of the 
// array (or other iterable) to the function.  