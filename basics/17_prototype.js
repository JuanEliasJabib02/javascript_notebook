/* 

Every object in javascript have a prototype, and the proto are the functions
that can recive the object
*/


//Object constructor : Is the way to create dynamic objects and re-usable

function Client(name,money) {
  this.name = name;
  this.money = money;
}

const juan = new Client("Juan",1000);


/* Create a prototype */

Client.prototype.showInfo = function () {
  return `Name:${this.name}, Money: ${this.money}`
}

console.log(juan.showInfo());

/* We add the method showinfo to the object Client and are objects created with the function
constructor Client have access to the new prototype in this case the Object Juan */


/* herency  in prototypes */

function Dog(name, breed) {
  this.name = name,
    this.bread = breed
  
  this.function
  
}

Dog.prototype.growl = function () {
  console.log(this.name + " is growling!!!")
}

function Cat(name, bread, age) {
  /* With the help of the method call we can inherith the properties from Dog to Cat */
  Dog.call(this, name, bread);
  this.age = age;
}

/* and if  we want to heradate methods we have to use a Object.create
thats is a function that work for copy the prototype and assign it to other fucntion
*/

Cat.prototype = Object.create(Dog.prototype) /* We are assigning the prototypes of dog to cat */

const Dante = new Dog("Dante", "Husky");

const Meow = new Cat("Meow","Pokemon",100)

console.log(Dante) 
console.log(Dante.growl());
console.log(Meow)
console.log(Meow.growl());

 