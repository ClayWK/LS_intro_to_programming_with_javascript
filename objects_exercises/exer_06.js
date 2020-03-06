// Add a qux property with value 3 to the myObj object we created in the 
// previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;  

// Without running this code, can you determine whether these two snippets produce the same output? Why?

// Snippet 1:

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// Snippet 2:

for (let key in myObj) {
  console.log(key);
}

// The difference between the code is deterined by whether each only accesses the object's
// own properties, or also accesses properties inherited from the prototype.
// In the case of the Object.keys method, only the object's own keys are accessed. No keys
// of the object's prototype are accessed.
// In the case of the for/in syntax, the properties of both the object and its prototype
// are iterated through.  