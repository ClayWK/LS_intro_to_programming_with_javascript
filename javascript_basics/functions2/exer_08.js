console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'

function removeLastChar(str) {
  return str.slice(0, str.length-1);
}

// The slice method returns a new string sliced from the calling string beginning at the index
// in the first argument up through, but not including, the optional index in the second
// argument.  If the second argument is omitted, slice will return the string through the end 
// of the calling string.  