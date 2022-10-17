
// Let can be initializate without delcare a initial value
let product;
// Let can be re-assigned
product = "Samsung";

console.log(product);

product = 20; // Javascript is a dynamic language dont specific the type of data



// let have a block scope


let pokemon = "charmander";
console.log(pokemon) 
if (true) {
  let pokemon = "charizard";
  console.log(pokemon)
}
console.log(pokemon)



