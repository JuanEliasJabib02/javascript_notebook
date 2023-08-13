/* 

Prototypes are the mechanism by which JavaScript objects inherit features from one another.
*/


//Object constructor : Is the way to create dynamic objects and re-usable

function Client(name, money) {
  this.name = name;
  this.money = money;
}

const juan = new Client("Juan", 1000);

console.log(Client)

/* Create a prototype */

Client.prototype.showInfo = function () {
  return `Name:${this.name}, Money: ${this.money}`
}

Client.prototype.SayHello = function (name) {
  return `Hello${name}`
}

console.log(juan.showInfo());
console.log(juan.SayHello("perro  "))
/* We add the method showinfo to the object Client and are objects created with the function
constructor Client have access to the new prototype in this case the Object Juan */




