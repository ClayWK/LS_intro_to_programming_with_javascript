
let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // { prefix : 'Pacific' }



let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // { Indian : 'Pacific' }

// Bracket notation accepts expressions, including variables. Dot notation does not.  