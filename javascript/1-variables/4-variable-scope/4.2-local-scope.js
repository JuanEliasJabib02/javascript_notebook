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

