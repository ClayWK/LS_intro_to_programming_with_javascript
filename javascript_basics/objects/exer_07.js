let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];
for (prop in vehicle) {
  keys.push(prop);
}

console.log(keys)

// We initialize an empty array, and use the for/in method of iteration to iterate through all of
// the properties of the object and then push each property name into the array.  

// We could have also used the Object.keys() method, which returns an array of the properties of
// the object supplied as an argument.  