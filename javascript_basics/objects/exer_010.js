function clone(obj) {
  let newObj = {}; 
  newObj = Object.assign(newObj, obj);
  return newObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
}

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

// We can use the Object.assign() method to copy an objects key value pairs into a target object
// using Object.assign(target, source) syntax.  