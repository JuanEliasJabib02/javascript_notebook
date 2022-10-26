/**
 * Set objects are collections of values. A value in the Set may only occur once;
 *  it is unique in the Set's collection. You can iterate through the elements of a 
 * set in insertion order. The insertion order corresponds to the order in which each
 *  element was inserted into the set by the add() method successfully
 */



const CART = new Set();


/* .add : Method to add a new elemento to the set */
CART.add("macbook");
CART.add("iphone");
CART.add("ferrari")
/* If i try to add iphone again , this will no be there
because every value is unique and iphone already exist */
CART.add("iphone")
/* But sets are Case Sensitivity so is we use a mayus 
this count as a new value */
CART.add("Iphone")

const obj = { a: 1, b: 2 };

CART.add(obj)

CART.add({ a: 1, b: 2 }) /* As obj is refencing a object this count as new */


/* Returns a boolean asserting whether an element is present with
 the given value in the Set object or not. */
console.log(CART.has("iphone")); // output: true
 

/* Removes the element associated to the value and returns a boolean asserting whether an element was 
successfully removed or not.*/

console.log(CART.delete(obj))

/* Removes all elements from the Set object. */

 //console.log(CART.clear());



/* Size: Returns the number of values in the Set object. */
console.log(CART.size)

/* A feature that is important to know is that the sets
are iterables */


CART.forEach(product => {
  console.log(product)
});



/* How to use set to delete duplicate elements */

const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const filterDuplicates = new Set(numbers)

console.log(filterDuplicates)