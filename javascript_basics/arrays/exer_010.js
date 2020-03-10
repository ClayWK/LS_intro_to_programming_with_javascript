let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-'));
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// Use Array.prototype.join() with a hypen as the separator parameter. Join combines each element
// of the array into a string with the specific seperator between each element.  If no separator
// is provided, a comma is used as the separator.   