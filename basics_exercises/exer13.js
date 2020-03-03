/*

What value does the following expression evaluate to?

'12' < '9'

Undefined, since we are comparing two strings with a less than comparison operator.

UPDATE: the expression evaluates as true since the operands are strings, not numbers.
When you compare two strings, JavaScript performs a character-by-character comparison going from left to right,
so on the first comparison, it determines that '1' < '9', so '12' must be less than '9'.'

*/