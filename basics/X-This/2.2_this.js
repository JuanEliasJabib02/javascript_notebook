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

/*1.Default Binding */

/* Default binding refers to how this is the global context whenever a function 
  is invoked without any of these other rules. If we aren't using a dot and we 
  aren't using call(), apply(), or bind(), our this will be our global object.

  Your global context depends on where you're working. If you're in the browser, 
  this will be the window. When programming in strict mode, the global context is undefined.
  */

function globalContext() {
  console.log(`hello im `, this);
}

// A good practice is not use this in global contex
globalContext();

// global === objectGlobal(node) === windows(client)



/** 2. Implicit Binding
 * 
 * Implicit binding occurs when dot notation is used to invoke a function.
 * 
 * EXAMPLE:
 */

const pokemon1 = {
  name: "charmander",
  pokedex() {
    console.log(`This is a ${this.name}`)
  },

  pokemon2: {
    name: "Bulbasour",
    pokedex() {
      console.log(`This is a ${this.name}`)
    }

  }
}

console.log(pokemon1.pokedex())
              /* this is pokemon 1 here */
console.log(pokemon1.pokemon2.pokedex())
                  /* This is pokemon2 here */

/**
 * In implicit binding, whatever is to the left of the dot(.) 
 * becomes the context for this in the function. 
 */


//3.Explicit Biding

/**
 * Explicit binding of this occurs when .call(), .apply(), or .bind() 
 * are used on a function.
 * 
 * We call these explicit because you are explicitly passing in a this context to call() or apply(). 
 * We’ll talk bind() in just a moment.
 * 
Here's how things look:
 */

 const goku = {
  name: "goku",
  
  sayHi(screaming, goodbye) {
    const normalHi = `hi my names is  ${this.name}!!`
    const normalGb = "see you later";

    const hi = screaming ?
      normalHi.toUpperCase() : normalHi
    
    const gb = screaming ?
      normalGb.toUpperCase() : normalGb
    
    console.log(hi)

    if (goodbye) {
      console.log(gb)
    }
  }
 }
/**
 * Function.prototype.call()
 * Call help us to invocate a function changing his context, in less words
 * changint the value of "this"
 */

goku.sayHi(true, true)

const vegeta = {
  name:"vegeta"
} 
                /** The first parameter is the new context(the object that go to be this and)
                 * and after the parameters that need the function*/
goku.sayHi.call(vegeta, true, true);

/**
 * Since we have .call, we must ignore what appears before the dot in our function call.
 * We are using goku object methods and calling it on another this context: runner.
 */


/** Function.prototype.apply():

.apply() is almost the same, except we must pass in an array of 
parameters after our this context.
 */

goku.sayHi.apply(vegeta, [true, true]);


/** Function.prototype.bind():
 * 
 * When called on a function, .bind() sets a this context and returns 
 * a new function of the same name with a bound this context.
 * 
 * Is difference to apply and call because bind dont execute the function untill
 * we need
 */

const newBidingBind = goku.sayHi.bind(vegeta, true, true);

newBidingBind() // is binding to the object that we select


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



/** 1. Lexican binding 
 *  It is produced when we write the function using arrows functions
*/
const Dante = {
  name: "dante",
  twitter: "@dante",
  
  sayHi() {

    // The arrow function is executed in the same contenxt that was created 
    const followMe = () => {
      console.log(`follow me on Twitter: ${this.twitter}`)
    }

    //If a strong biding, javascript detect that is a lexical binding, the go to
    // choose this and dont
    // go to search others bindings , we cant chance the context with bind, call,aply.
    

  /*   function followMe() {
      console.log(`follow me on Twitter: ${this.twitter}`)
    } */

    console.log(`Hi my name is ${this.name}`);
    followMe()
  },
    
}

console.log(Dante.sayHi())





const globalContextArrow = () => {
 // console.log(this)
}

globalContextArrow(); /* --> Arrows functions dont have their own bindings to this, and should not 
                      be used as methods */


/**
 * This inside a method:
 * 
 * If a function is part of a object we referer to him as a method but is not the case,
 * we referer to him as a function 
 */

const object = {
  property1: "value1",
  property2: "value2",

  method1() {
    console.log(this.property1) // We referer to the owner of the method in this case the object
  },
  method2(property1) {
    this.property1 = property1;
    console.log(property1)
  }
}

//object.method1();
//object.method2("edited"); 


/** 
 * If we use this outside a object we refer to the globalObject but
 * if we use this inside a object we refer to the object
 * */ 



