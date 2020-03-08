// Write a function that searches an array of strings for every element that matches the regular 
// expression given by its argument. The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']

function allMatches(arr, regex) {
  let matches = [];
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      matches.push(arr[i]);
    }
  }
  return matches;
}

/* a much simpler implementation below

function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}

*/  