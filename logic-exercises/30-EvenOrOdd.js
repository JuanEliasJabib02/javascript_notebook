/**
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */



/* Pseudocodigo

  How i know if a number is Even or Odd?

  if a  number if divide / 2 and recipes is 0 === Even
  if a number if divide /2 and recipes !== 0 Odd
 */

function EvenOrOdd(number) {

  if ((number % 2) !== 0) {
    return "Odd"
  }
  else {
    return "Even"
  }
}

console.log(EvenOrOdd(3))