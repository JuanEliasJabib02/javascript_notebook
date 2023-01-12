"use strict"
/**
 *  What is the Scope ?:
 * 
 * The scope is the current context of execution in which values and expressions are "visibles".
 * 
 * If a variable or expression is not in the current scope it will no be available for use.
 *
 */

/**
 * Javascript have 2 types of scope
 * 
 * Global Scope and Local Scope.
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
 * The fuction scope are the variables or expression declared inside a function
 * they are visibles inside but not outside the function
 * 
 */

function scopeFunction() {
  let dog = "dante";
}
//console.log(dog) // Cant be accesed outside the function

/**
 * Block Scope :
 * 
 * The block scope are the variables or expression declared inside a  block statement
 * {}, they are visibles inside the block but not outside him
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
 Scope can be layered in a hierarchy, so that child scopes have access to his parent scope but not viseversa.
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