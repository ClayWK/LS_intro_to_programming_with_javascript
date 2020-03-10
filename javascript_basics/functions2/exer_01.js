function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

// When a default value is desired in a function declaration, we can use 'parameter = defaultValue'
// syntax.  

greet(undefined);