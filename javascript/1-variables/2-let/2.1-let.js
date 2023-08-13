
// 'let' can be initialized without declaring an initial value.
let product;
// 'let' can be reassigned.
product = "Samsung";

console.log(product);

product = 20; // JavaScript is a dynamic language that doesn't require specifying the data type

// 'let' has block scope.

let pokemon = "charmander";
console.log(pokemon) 
if (true) {
  let pokemon = "charizard";
  console.log(pokemon)
}
console.log(pokemon)



