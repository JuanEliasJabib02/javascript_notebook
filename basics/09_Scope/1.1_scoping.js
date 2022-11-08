"use strict"
/**
 * Scope:
 * The scope is the current context of execution in which values and expressions
 * are visible or can be referenced, If a variable or expression is not in the
 * current scope, it will not be available for use.
 * 
 * Javascript has a lexical scope because the scope of every variable is determinated
 * reading the code of the program, without executing it
 * 
 * Exist two types of scope
 * 
 * Global Scope and Local Scope
 * 
 */

/**
 * Scope Global :
 *  Are the variables declarated outside of any function or blockcode
 *  and can be accesed from every place of our program
 *  
 */
const variable = "im  in the global"


/**
 * Local Scope :
 * only can be accesed from one piece of our program 
 * 
 * Exist two sub-types of local scope
 * -Function scope
 * -Block scope
 */

/** 
 * Function Scope:
 * 
 * Are accesible inside the function, but not ouside.
 * 
 * as a curiosity all the variables declared with var always
 * will has a function scope
 */

function scopeFunction() {
  let dog = "dante";
}
//console.log(dog) // Cant be accesed outside the function

/**
 * Block Scope :
 * A blockscope is all portion of code enclosed between {} 
 * and can be accesible inside the block but not ouside
 */

function blockScope() {

  let cat = "catito";

  if (cat) {
    let cow = "muu";
  }

  console.log(cow) /* Cant be accesed from here because cow is inside the if block */
}

/**
 * Are a good practice of coding, our variables has to be declared inside the most
 * reduced scope possible.
 */


/*
So what is the difference between the global and local scope?

the difference between the global and local scope are that
the variables declared with global scope will stay during all
the program execution and the variables declared with local scope
only during the execution of the function or block
 */

/**
 * Scope Chain:
 * 
 * Try to understand the hierarchy between the 
 * distint existing scopes  is the key to understand
 * the scopechain
 */



let fruit = "banana";
function eat() {
  let fruit = "apple"
  function Wash(){
    console.log("washing " + fruit)
    /* Javascript search from inside to outside how appears first the fruit
    with apple is used and is produced a variable shadowing */
    /* What is a variable shadowing 

    Appears when a variable that is in a most reduced scope than other
    variable that is in a superior scope following the scopechain have the same name
    */
  };
  Wash();

}

eat();