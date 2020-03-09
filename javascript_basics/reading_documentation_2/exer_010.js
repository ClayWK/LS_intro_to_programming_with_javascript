let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

// This code produces an error because we want to access the length property of a string.
// When accessing the property of an object, no () are appended to the property name.
// The syntax here is that of a function, which does require (). 

// Why a Type Error? According to the documentation of length, it returns a number. 
// So tweet.length is expected to be a number. Instead, we try to invoke it as a function 
// when we write tweet.length(). So when the JavaScript engine encounters tweet.length(), 
// there is a type mismatch: tweet.length is expected to be a number, but we use it as a function.s