console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32

function catAge(years) {
  if (years === 1) {
    return 15;
  } else if (years === 2) {
    return 24;
  } else {
    return 15 + 9 + (years - 2) * 4;
  }
}