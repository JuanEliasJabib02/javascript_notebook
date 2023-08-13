/**
 * Object assign:
 *  This method copies all propertises from one or more sources objects to a target object,
 *  it return the modified target object
 * 
 * SYNTAX:
 * Object.assign(target, ...sources);
 * 
 * //PARAMETERS
 * 
 * target: the target object, what to apply the source properties to, which is returend after it is
 * modified
 * 
 * sources: The source object(s) - Objects containing the properties you want  to apply
 * 
 * RETURN VALUE:
 * the target object modified
 */

/* EJ: */



const person = {
  name: "Juan"
}

const lastName = {lastName:"Jabib"};
const age = { age: 26 };
const pet = { pet1:"Dante",pet2:"Messi",pet3:"Dieci"}
Object.assign(person, lastName, age, pet)

/**
 * The target is the first parameters, after the parameters are the source 
 * We copie the propierties of lastname, age,pet to the target object person 
 * so when we do console.log we can see the object person with the properties
 * of the rest of objects
 */

console.log(person)


// Cloning a object

const obj = { a: 1 }
const copy = Object.assign({}, obj);
console.log(copy)