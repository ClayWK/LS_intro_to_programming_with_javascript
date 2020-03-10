let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

function contains(city, arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === city) {
      return true;
    }
  } return false;
}