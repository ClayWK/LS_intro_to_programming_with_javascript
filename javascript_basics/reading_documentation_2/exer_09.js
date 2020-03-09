let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit && (currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// The SyntaxError object represents an error when trying to interpret syntactically invalid code.
// It is thrown when the JavaScript engine encounters tokens or token order that does not conform
// to the syntax of the language when parsing code.

// The problem was the first condition was originally followed by an && outside the parentheses
// which was then followed by an additional condition. This syntax is invalid.  
