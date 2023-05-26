// Keyword this:

/*
 -This keyword do reference to the object in current ejecution
and depends of the context  do reference to distints objects

What is "context" in dev?
The context is the object in current ejecution in a specific moment

 -This is all about where a function is invoked. Often,
early programmers worry about where the function was declared.
 Perhaps the function was declared in a specific file or a particular object. 

 Surely this changes it's this
 
 To understand this, we need to see where it is invoked.
Nothing else matters, with one exception which we'll cover in a moment.

*/

/**
 * What is binding?
 * 
 * Is Assign the value that gonna take this when executing the function
 * 
 * Types of binding?
 * 
 * Default Biding(Direct invocation)
 * Implicit Biding(Method invocation)
 * Explicit Biding(Indirect function)
 * New Binding(instantiate objects)
 * Lexical Binding(Arrow functions)
 * 
 */



/**
 * 3. NEW BINDING
 * 
 * When we instantiate objects with "new" occurs
 * the new binding
 * 
 * Javascript create a new empty object and invocate
 * the constructor function with the new object
 * as valor of this and after the object is save 
 * in the variable
 */
class User {
  constructor(name) {
    this.name = name
  }
};
const Juan = new User("Juan"); // <-- Here occurs a new binding



