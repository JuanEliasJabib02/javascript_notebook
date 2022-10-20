/* 
  We can define polymorphism as the capacity of a object to manipulate distint data
  types in a uniform way
*/

/**
 * Benefits of polymorphism
 * 
 * - Is a way to reduce the coupling of our app
 * - Sometimes allow to create more compact code 
 * 
 * 
 * Properties of the polymorphism
 * 
 * - Overloading: Methods can take parameters with diferent data types
 * - Parametric polymorphism: manage generic types, not known in advance
 * - subtype Polymorphism or inclusion polymorphism: type can be
 *   represend by a  class and derived from it
 */


/* Overloading */

/* This function countItem 2 is a example of overloading because 
can procesate two type of dates numbers and strings, because we are converting
the number into a string. */

function countItems1(number) {
  return number.length // Can manage only number datatypes
}

function countItems2(number) {
  return number.toString().length // Can manage string a number datatypes because 
                                  // We are converting the numbers type intostring always
}

console.log(countItems2(222));

/* The second form of overloading is about 

In this example we can see that depends of the quantity of parameters is go to
execute a sum or 3 parameters or two, in javascript is really easy do it
only adding a default value = 0;

*/

function sum(x = 0, y = 0, z = 0) {
  return x + y + z
}

console.log(sum(10, 20))

/**
 * Parametric polymorphism:
 * Is the capability of an method to work with parameters of any type , also called generics
 */


/* Using the function constructor */

class Stack {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }
}

/* We can see here that the method addItems can procesate strings and numbers */
const stack = new Stack()
stack.addItem("hi im a string in the stack")
console.log(stack)

const stack2 = new Stack()
stack2.addItem(23123)
console.log(stack2)

/**
 * Subtype polymorphism
 * 
 * Allow objects with diferent types 
 */

class Person {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
}

class Programmer extends Person {
  constructor(name,lastName,language) {
    super(name,lastName)
    this.language = language
  }
}

const alba = new Person("Alba", "Caro");
const juan = new Programmer("Juan", "Jabib", "javascript");

console.log(alba);
console.log(juan);

function writeFullName(p) {
  console.log(p.name + " " + p.lastName)
}

writeFullName(alba)
writeFullName(juan)