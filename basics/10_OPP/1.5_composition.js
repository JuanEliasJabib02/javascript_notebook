/**
 *  -Composition
 *  Is the capability of a object to refer to one or more dependent objects
 */


const person = {
  firstName: "Juan",
  lastName: "Jabib",

  /**
   * Address is conformed by various properties is a object depends of other obbject
   * in this case the object person , in less words , the object addres depends of the 
   * objectvperson, if the person disapear the address too.
   */
  address: {
    street: "estadio",
    city: "medellin",
    country:"colombia"
  }
}


/* In this example we can see the object address has no */
