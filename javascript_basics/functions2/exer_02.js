greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

function greet(greeting1 = 'Hello', greeting2 = 'world') {
  console.log(greeting1 + ', ' + greeting2 + '!');
}