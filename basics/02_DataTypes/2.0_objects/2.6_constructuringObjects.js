/* 
  Javascript has many ways to create objects.
 */


/**
 * Using objects initializers
 * 
 * The syntax for an object using an object initializer is:
 */

const obj = {
  property1: "value1",
  property2:"value2"
}

/**
 * Using a function constructor 
 * 
 * Define the object type by writing a constructor function. 
 * There is a strong convention, with good reason, to use a capital initial letter.
 */

 function User(email, password,) {
  this.email = email;
  this.password = password;
}

const Juan = new User("Juan", "easypass");
/* We can create any number of "Users" */
const Samir = new User("Samir", "easypass");

console.log(Juan)


/* Using the Object.create */


// Animal properties and method encapsulation
const Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType() {  // Method which will display type of Animal
    console.log(this.type);
  }
};

// Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Output: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output: Fishes
