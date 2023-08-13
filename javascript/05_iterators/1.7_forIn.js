/**
 * For in
 * 
 * The for...in statement iterates over all enumerable string properties of an object 
 *  including inherited enumerable properties.
 * 
 * SYNTAX 
 * for (variable in object){
 *   statement
 * }
 */


const auto = {
  model: "camaro",
  year: 1969,
  motor:"6.0"
}

for (let property in auto) {
  console.log(property) // Its iterating and show the propertys and not the value
  console.log(`${auto[property]}`) // If we want see the value we have to access to it
}
