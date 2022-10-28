

const User = "Juan"

/* First way to export */

const Pet = "Dante"


//Second way to export 
export class Car {
  constructor(name) {
    this.name = name
  }
}

/* Using the keyword export we can export the part of the code that is needed */
/* You can export functions,variables, classes, but they need to be  top-level items
you can't use export inside a function */
export { User,Pet };