/**
 * WeakMap
 * 
 *
 * -Only accepts objects
-The weakMap dont have a method .size
-Are not iterable
 * 
 */

const product = {
  idProduct: 1
}

const weakMap = new WeakMap();

console.log(weakMap.set(product, "monitor"));



