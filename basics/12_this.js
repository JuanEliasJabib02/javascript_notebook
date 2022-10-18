// Keyword this:

/*
 This keyword do reference to the object in current ejecution
and depends of the context  do reference to distints objects

What is "context" in dev?
The context is the object in current ejecution in a specific moment
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
 */

/*1.Default Binding */

function globalContext() {
  console.log(`hello im `, this);
}

// A good practice is not use this in global contex

//globalContext();

// global === objectGlobal(node) === windows(client)


//2.Implicit Biding(Method invocation)

/**
 * when we invocate a method of a object is produced this type of binding
 * EJ:
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
//We we use this type of biding the value of this is always in the left after the .
//console.log(pokemon1.pokedex())
            /* Object.method
                    <-This is the object because is in th left of the . */
//console.log(pokemon1.pokemon2.pokedex())



// When we work with the dom events this, by default is the element that init



//3.Explicit Biding

/**
 *  The explicit biding help us to select the object that we want that be 
 * "this" when the function is executed
 *
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
 * All functions in javascripts are objects and the objects have properties and methods
 * that we can use 
 * 
 * The first method Function.prototype.call()
 * Call help us to invocate a function changing his context, in less words
 * changint the value of "this"
 */

//goku.sayHi(true, true)

const vegeta = {
  name:"vegeta"
} 
                /** The first parameter is the new context(the object that go to be this and)
                 * and after the parameters that need the function*/
//goku.sayHi.call(vegeta, true, true);

/**
 * So We can conclude that the implicit binding appears when we do a indirect invocation
 */


/**
 * The second method is Function.prototype.apply():
 *  this Method is very similar to call() the unique difference is the way in wich we send
 * the parameters, in this method we send the parametrs inside a array
 */


//goku.sayHi.apply(vegeta, [true, true]);


/**
 * The third method is Function.prototype.bind():
 * 
 * is a method of the functions that return a new function with the new context 
 * binding to the object that we select
 * 
 * Is difference to apply and call because bind dont execute the function untill
 * we need
 */

const newBidingBind = goku.sayHi.bind(vegeta, true, true);

newBidingBind() // is binding to the object that we select


/**
 * 3. NEW BINDING
 * 
 * Javascript is a language is a multy-paradimic language
 * we cam program with the paradic of OOP or funcional programming
 * 
 * 
 */


class User {
  constructor(name) {
    this.name = name
  }
};

const Juan = new User("Juan");
/** We Instantiate objects with new it appears biding ,
 * javascript create a new empty object and invocate the constructor function with
 * the new object as valor of this and after the object is saved in the variable
 */

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
