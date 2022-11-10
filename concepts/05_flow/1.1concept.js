/**
 * What is flow?
 * 
 * Flow is a static type checker developed by Facebook in 2014. 
 * 
 * JavaScript data types are dynamic, this means that the value we assign to a variable 
 * determines the type of that variable, and the variable data type changes as soon as we 
 * assign a value of a different type to it. For example:
 */

 let x = 346  // Here x is a number
x = 'something' // Now x is a string
 
/**
 * The above code is a perfectly working code in Javascript,
 *  the variable x was of type number when it was declared but later it became type string. 
 * As you can see on JavaScript there’s no built-in way to annotate or restrict the types of 
 * variables.
 * This means we don’t have to worry too much about the type a variable should have, 
 * which makes the development of a program quicker, but it also means that the code 
 * is more prone to have bugs and unexpected behaviors as a variable moves through different
 * types.
 * 
 * Luckily nowadays we can find a bunch of different tools to avoid any dynamic 
 * type-changing issues with JavaScript. These tools allow us to detect errors in code 
 * without running it, which is known as static checking.
 *  They can also determine what’s an error and what’s not based on the kinds of values 
 * being operated on, which is known as static type checking.
 * 
 * 
 */



