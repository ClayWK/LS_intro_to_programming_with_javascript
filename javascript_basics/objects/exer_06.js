let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
}

for (prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

// It's true will never be output because the for/in method of iteration iterates through the keys
// in an object. Although there is a key named "true", they key itself is not the boolean true. 
// Keys are always strings, never booleans. If we changed line 11 to check for equality with "true"
// we would recieve the It's True output.