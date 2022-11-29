const EventEmitter = require("events");


const customEmitter = new EventEmitter();



/**
 * the .on method allow one or more functions to be attached
 * to named events emitted by the object
 * 
 * When the eventEmitter objects emits an event , all of the functions
 * attached to that specific event are called synchronously
 */
customEmitter.on("response", (name) => {
  console.log(`data recivied ${name}`)
});


customEmitter.on("response", () => {
  console.log(`some other logic here`)
});


customEmitter.emit("response","juan");