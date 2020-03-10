let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let personArr = [];
for (prop in person) {
  personArr.push([prop, person[prop]]);
}

console.log(personArr);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

// Simpler solutiton is to simply use the Object.entries() method, which returns an array of the
// supplied object's key/value pairs.    