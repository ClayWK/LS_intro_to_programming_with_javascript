console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // true
console.log(isBlank(''));     // true

function isBlank(str) {
  if (str.trim().length > 0) {
    return false;
  } else {
    return true;
  }
}