let str = 'launch school tech & talk' // 'Launch School Tech & Talk'

let str2 = str.split(' ');
let str3 = str2.map(function(elem) {
  return elem[0].toUpperCase() + elem.slice(1);
}); 
let str4 = str3.join(' ');

let str5 = str.split(' ').map(function(elem) {
  return elem[0].toUpperCase() + elem.slice(1);
}).join(' ');

let str6 = str.split(' ').map((elem) => elem[0].toUpperCase() + elem.slice(1)).join(' ');


console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str6);