// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// Given an input string, this function will split the string into separate strings anywhere there is 
// a whitespace character in the input string, resulting in an array of strings. The function will then 
// reverse the order of the strings in the array, and iterate through the now-reversed array when the 
// map function is called. As the map function iterates through the array, it will create a new array
// and store the length of the strings in that new array.

// The function will ultimately return an array of string lengths of the words that were in the original
// input string, listed from the end of the original input string to the beginning.  

console.log(doSomething("Hi there Mr. Computer!"));