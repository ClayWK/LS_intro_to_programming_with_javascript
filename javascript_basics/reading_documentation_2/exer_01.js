// In the following code snippet, find all violations of the style guide. Rewrite it so that it conforms with the guide.

/* 
let ice_cream_taste = 'chocolate' // variable name doesn't use camel case; missing semicolon
let ice_cream_density = 10 // variable name doesn't use camel case; missing semicolon

while(ice_cream_density > 0) // add space after while; fix variable name
{ // bracket on wrong line
    console.log('Drip...'); // 4 space indentation instead of 2
    ice_cream_density -= 1; // 4 space indentation instead of 2; fix variable name
}

console.log('The '+ ice_cream_taste +' ice cream melted.'); // fix variable name; spaces before and after operators
*/ 

let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');