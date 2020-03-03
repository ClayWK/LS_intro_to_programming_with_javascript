// Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

var foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will this result in an error?

// Yes. The index of an array begin with 0, so trying to access an array element with an index that is >= the
// length of an array will always result in an out-of-bounds indexing into the array

// UPDATE Alhough this is an out-of-bounds indexing, javascript does not throw an error, but returns undefined.