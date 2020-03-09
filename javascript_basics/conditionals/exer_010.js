let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving);

// precedence of operations here is < (12) > (12) [left to right], && (6), || (5)
// let isMoving = true && (false || true);
// let isMoving = true && (true);

// => true

// Bonus: the paranthese is needed in the boolean expression since && has higher precedence than ||.
// Without the parathese, the formula would not be evaluated correctly.  