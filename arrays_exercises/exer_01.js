// In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4]; // => 4

let array2 = [1]; 
array2.length = 5; // => 5, but the expanded elements in the array will not be initialized

let array3 = [];
array3[-1] = [1]; // => 0, when the array is initialized, it is empty, even though something has been added
                  // with an index of -1, the value 1 is not really an element of the array, and is intead
                  // a property of the array object

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // => 3, by manually adjusting the length of the array, the array is truncated

let array5 = [];
array5[100] = 3; // => 101