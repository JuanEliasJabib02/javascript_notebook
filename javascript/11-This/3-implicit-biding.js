/**

 * Implicit binding occurs when dot notation is used to invoke a function.
 */
class Pokemon {
  name;

  constructor(name) {
    this.name = name;
  }

  pokedex() {
    console.log(`This is a ${this.name}`);
  }
}

const pokemon1 = new Pokemon("Charmander");
const pokemon2 = new Pokemon("Bulbasaur");

/**
 * In implicit binding, whatever is to the left of the dot(.) 
 * becomes the context for this in the object (or fuc). 
 */

pokemon1.pokedex();
pokemon2.pokedex();

