/**
 * ARRAY.prototype.reduce():
 * 
 * Is a method used to reduce all elements
 * of a array into a single value, that value
 * can be object, string,number , can be any.
 */

/* Example */
const numbers = [1, -1, 2, 3];

/* In this example we want reduce this array of numbers into
a single number */

//Process inside the reduce
//acummulator = 0, currentValue = 1 => acummulator = 1
//a = 1, c = -1 => a = 0
//a = 0 , c = 2 => a = 2
//a= 2 , c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

/* Reduce take two parameters, the first parameters is
a callbackfn and the second value is the initial value of the accumulator
 */
console.log(sum)