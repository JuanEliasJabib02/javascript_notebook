/** 1. Lexical  binding 
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



