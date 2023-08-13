
/**
 * The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.
 *  The condition is evaluated after executing the statement, resulting in the 
 * specified statement executing at least once.
 */

let number = 0

do {

  number++// increment
} while (number < 10); // Condition

console.log(number)


// Examples

let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 10);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
