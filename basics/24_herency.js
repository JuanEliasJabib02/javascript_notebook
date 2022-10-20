/* 
  When we speak about herency, we are talking about a principe that able us to create  specifics
  objects from other objects acquiring the properties of this.
*/

class Person {
  constructor(firstName, lastName) {
    
    // .A person have a firstname and lastname
    this.firstName = firstName,
    this.lastName = lastName
  }

}
    /* With the keyword extends we can specify that this class will inherit properties from class Person */
class Programmer extends Person {
  constructor(language,firstName,lastName) {
    super(firstName,lastName); // For obtein all the properties that we are inhereit, we use super();
    // And a programmer is too a person so this have a name and a lastname too
    // But we can heredate the properties from Person , so doing that we avoid write again the same code
    this.language = language 
  }

}

const person = new Person("Juan", "Jabib")

const programmer = new Programmer("Samir", "Jabib", "react.js")

console.log(person);
console.log(programmer)



