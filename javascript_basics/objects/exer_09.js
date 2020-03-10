let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = Object.fromEntries(nestedArray);

console.log(obj);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// The Object.fromEntries() method is the inverse of the Object.entries() method.
// Object.fromEntries() takes as an argument an iterable set of key vaue pairs and returns a new
// object with those key value pairs.  