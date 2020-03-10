let initGame = () => ({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

// Because we want to return an object literal, the curly braces defining the object must be
// wrapped in parentheses.  