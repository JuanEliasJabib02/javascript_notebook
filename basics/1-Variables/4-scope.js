"use strict"

/* What is the type of scope of javascript?
    Lexical scope means that scope is defined by author-time decisions of where functions are declared.
     The lexing phase of compilation is essentially able to know where and how all identifiers are declared,
   and thus predict how they will be looked-up during execution.
 * Javascript has a lexical scope because the scope of every variable is determinated
 * reading the code of the program, without executing it
 * 
 * */

/**
 *  What is the Scope ?:
 * 
  * The scope are the rules that determinate where and how a variable can be found in the current
  * execution context, if the variable can't be found in the  current scope javascript will keep looking for it
  * in the next level scope untill reach the global scope and this is known as Nested Scope
 * 
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
 * Are the variables accesible inside the function but not outside
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
  function Wash() {
    console.log("washing " + fruit)

    /**
     * When occurs shadowing??
     * 
     * Shadowing occurs when exist two variable with the same name in differents scopes
     * javascript search from the low level scope of a nested scope to the high level scope
     * and stop once it finds the first match l
     * 
     * In this examples we can see two variables with the same name "fruit" in differents scopes
     * how javascript is searching from inner to outside  when match with the first fruit with
     * the value "apple" he stop and take that value.
     */

  };
  Wash();

}

eat();