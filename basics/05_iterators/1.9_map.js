
/* 
  map calls a provided callbackFn function once for each element in an array,
  in order, and constructs a new array from the results.

  Work in the same form that a forEach but the principal difference is that
  .map make a new array from the results...
 */

const numbers = [1, 2, 3, 4]
  
const newArrayFromNumbers = numbers.map(number => {
  return number * 2
})

console.log(newArrayFromNumbers)

