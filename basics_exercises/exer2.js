let number = 4936;

let ones = number % 10;
console.log('ones = ' + ones);

let tens = (number - ones) / 10 % 10;
console.log('tens = ' + tens);

let hundreds = (number - (tens * 10) - ones) / 100 % 10;
console.log('hundreds = ' + hundreds);

let thousands = (number - (hundreds * 100) - (tens * 10) - ones) / 1000 % 10;
console.log('thousands = ' + thousands);