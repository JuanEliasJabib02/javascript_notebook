
/**
 * An arrow function expression is a compact alternative  to  a traditional function expression,
 * but is limited and can't be used in all situations
 * 
 */

//console.log(arrowFunction) 
//1. Arrow function cant be called before the initialization

const arrowFunction = (params) => {
    //Body of the function
}


/**
 * Arrow function dont have their own binds to this, arguments or super, and should not be
 * used as method
*/

const arrowFunction2 = (params) => {
    //Body of the function
    console.log(this) // -> Arrow function dont have, this
}

const object = {

    property: "value",

    method: () => {
        return this
    }

}
console.log(object.method());
console.log(this)

// The value of this inside an arrow function
// is bassically what its value would have been
// outisde the arrow function




/* 
Arrow functions aren't suitable for call, apply and bind methods, 
which generally rely on establishing a scope.
 */

/* Arrow functions cannot be used as constructors. */

/* Arrow functions cannot use yield, within its body. */




