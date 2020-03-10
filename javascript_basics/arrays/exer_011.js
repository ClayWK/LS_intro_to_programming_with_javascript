let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []

// The Array.prototype.shift() method removes the first element of an array, and returns
// the removed element. The shift method mutates the caller.  