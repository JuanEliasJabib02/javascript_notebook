/**
 * 
 * Spread operator.
 * It provides you with the ability to expand iterable objects
 * into multiple elements. What does it really mean? Let’s check some examples.
 *
 * 
 * The most common use is probably combining arrays or copyng arrays
 */

// Example 1:
const movies = ["Leon", "Love Actually", "Lord of the Rings"];
console.log(...movies);


/* Spread in array literals */

const months = ["Jan", "Feb", "Mar", "Apr", "May"]

const months2 = [...months, "Jun"]

console.log(months2)

/* Copy an array */

const array1 = [1, 2, 3];
const array2 = [...array1]


/* Concathenate array */

const number1 = [1, 2, 3];
const number2 = [4, 5, 6];

const newArray = [...number1, ...number2];

console.log(newArray)




/* Spread in a function */

function showNumbers(x, y, z) {
  console.log(x,y,z)
}
const args = [1, 2, 3]

showNumbers(...args)





