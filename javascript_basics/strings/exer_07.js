console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true

function isBlank(str) {
  if (str) {
    return false
  } else {
    return true
  }
}