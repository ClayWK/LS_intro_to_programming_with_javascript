// greetings.js

let rlSync = require('readline-sync');

function getName () {
  let firstName = rlSync.question("What's your first name?\n");
  let lastName = rlSync.question("What's your last name\n");
  let name = firstName + ' ' + lastName;
  return name;
}

function askName (prompt) {
  let name = rlSync.question(prompt);
  return name;
}

// name = getName();
let firstName = askName("What's your first name?\n");
let lastName = askName("What's your last name\n");
console.log(`Good morning, ${firstName} ${lastName}!`);

