/**Assiociation
*Is the capability to refer another object */


class Pet {
  constructor(name, breed) {
    this.name = name,
    this.breed = breed
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}

const dante = new Pet("dante", "husky");
const messi = new Pet("messi", "snchauzer");

/**
 * The association say that 2 objects may be related but if the 
 * relation dissapear the object still can work perfectly , that is to say
 * that every object have his own purpose
 */

//relation
dante.parent = messi;

console.log(dante)
console.log(messi)