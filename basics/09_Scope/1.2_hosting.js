

/**
 * What is the  the hosting?
 * 
 * Is the effect that allow us to use functions and variables before the declration
 
 */


//Example 
console.log(character) //  2. after the elevation the varaible character already exist 
                        //This will show us a undefined because the hosting effect
var character = "Randy"
//  1. The variable is elevate to the top scope before the execution


/**
 * How work the hoisting with var, let and const?
 * 
 * The variables initializate with var receive a undefined by default
 * 
 * Let and const are too affected by hoisting but not receive a default value
 * 
 * if we try to access to a variable declared with let or const before is declared
 * result in ReferenceError
 * 
 * That happens because let and cost are inside the temporal dead zone 
 * 
 */

//console.log(goku);
const goku = "goku";

/* Functions are afected by hoisting too so we can call a funcion before 
the declaration
*/

//Example

SayHello();

function SayHello() {

  console.log("hello")
}