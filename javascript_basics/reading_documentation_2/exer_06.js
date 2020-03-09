// The MDN page for Date lists two methods to get the year of a date.

let today = new Date();

today.getYear();
today.getFullYear();

// What is the difference between the two methods and which one should you use?

// Date.prototype.getYear returns the year (usually 2-3 digits) in the specified date according to local time.
// Date.prototype.getFullYear returns the year (4 digits for 4-digit years) of the specified date according to local time.

// getFullYear is preferred.  

console.log(today.getYear());
console.log(today.getFullYear());