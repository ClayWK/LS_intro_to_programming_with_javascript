// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. 
// Instead, try to use the reduce method.

// From Exercise 6: Use map and filter to first determine the lengths of all the 
// elements in an array of string values, then discard the even values (keep the odd values).

/* function oddLengths(arr) {
  let lengthArr = arr.map(function(elem) {
    return elem.length
    })
  let oddLengthArr = lengthArr.filter((num) => num % 2 !== 0);
  return oddLengthArr; 
}
*/

function oddLengths(arr) {
  return arr.reduce((accumulator, element) => {
    if (element.length % 2 === 1) {
      accumulator.push(element.length);
    }
  }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]