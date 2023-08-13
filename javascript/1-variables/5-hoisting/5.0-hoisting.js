
/**
 * What is the  the hosting?
 *  
 * Hoisting is the process whereby function declarations and variables are moved to the top 
 * of their respective scopes.
 */

/**
 * Why happen the hoisting effect?
 * 
 * This happens because the JavaScript engine undergoes two phases. The first phase 
 * is the compilation phase, which occurs first. In this phase, the hoisting effect becomes apparent. The second phase is the execution phase.
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

/* What is the temporal dead zone

A let or const variable is said to be in a "temporal dead zone" (TDZ) 
from the start of the block until code execution reaches the line where the variable 
is declared and initialized.

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