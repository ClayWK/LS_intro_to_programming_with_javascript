console.log(first(['Earth', 'Moon', 'Mars'])); // 'Earth'

function first(arr) {
  return arr[0];
}

// If an array is empty, the function would return undefined.  

let arr = [];
console.log(first(arr));