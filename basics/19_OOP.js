// Class

/**  There two way two create class in javascript 
 *
*/

/** Class Expression( the most common) */

class ClassExpression {

}


/** Class Declaration */

const ClassDeclaration = class {
   
}

/**
 * Inside the class we use a constructor but...
 * 
 * What is a constructor?
 * 
 * Is just a function called using  the "new" keyword
 * 
 * When you call a  constructor it will:
 * 
 * Create a new object
 * Bind this the new object , so you can refer to this in your constructor code
 * run the code in the constructor
 * return the new object
 */


/**
 * 
 * What is OOP?
 * Is a programming paradigm focus on
 * objects instead of functions
 * 
 * In the OOP the class is like a "template" for create new objects with the same  
 * type of properties and methods like a  User or a Cliet
 */

class User {
  constructor(name, email) {
      //Properties of our object
     this.email = email
     this.name = name 
  }
  // Methods

  showInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
  }
}

//for create new objects using our class we use the object constructor with the keyword "new"
// that create a new binding(check this cap)
const Juan = new User("Juan", "juaneliasjabib02@gmail.com")

Juan.showInfo(); // As the method is in the constructor "template User", we can use it



/**
 * OOP Principies
 * 
 * We can asume that a language is OOP when have at least this two definition
 * 
 * The first is the capability to model problems through objects
 * 
 * The second is support few principles to grant modularity and code reuse
 * 
 * To comply with the first requeriments the language has to have
 * 
 * -Assiociation
 *  Is the capability to refer another object
 * 
 * -Aggregation
 *  Is the capability of a object to refer one or more independent objects
 * 
 * -Composition
 *  Is the capability of a object to refer to one or more dependent objects
 * 
 * To comply with the second requeriments the language has to have 
 * 
 * - Encapsulation
 *  Is the capability to concentrate into a single
 * entity data and code that manipulates it, hidden internal details
 * 
 * - Herency: 
 *  Is the mechanism by which objects acquires some or all features of
 *  one or more objects
 * 
 * - Polymorphism:
 *  Is the capability to process objects in differents ways based on their
 *  data type or structure
 * 
 * 
 * Model through objects to simplify reality = abstraction.
 * 
 * 
 */