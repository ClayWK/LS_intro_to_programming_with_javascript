let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);

// This code will log false to the console. Although the two arrays have identical contents, they
// are separate arrays. Variables for arrays are pointers to those arrays. When we compare the 
// pointers to two different arrays, even though the contents are identical, we are comparing
// two different addresses in memory and this equality comparison will return false.  