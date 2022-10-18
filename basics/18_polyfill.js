











/**
 *  What is a polyfill
 * 
 * A polyfill is a piece of code used to provide modern functionality on olders
 * browsers that do not natively support it
 */


/* Imagine if the method .map of the arrays dont exist and we
have to create our own method similar to "map"

Lets create .customMap
*/

Array.prototype.customMap = function (callback) {

  let result = []

  for (let index = 0; index < this.length; index++) {

    const element = this[index]
    const transformedElement = callback(element, index)
    result.push(transformedElement)
  }
};

let array = [1, 2, 3];

array.customMap(element => console.log(element * 2) )


