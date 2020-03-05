// Use map and filter to first determine the lengths of all the elements in an 
// array of string values, then discard the even values (keep the odd values).

function oddLengths(arr) {
  let lengthArr = arr.map(function(elem) {
    return elem.length
    })
  let oddLengthArr = lengthArr.filter((num) => num % 2 !== 0);
  return oddLengthArr; 
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); 