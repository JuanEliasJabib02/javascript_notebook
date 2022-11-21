const sayHello = (name) => {
  console.log(` Hello ${name}`);
}

module.exports = { sayHello };

console.log(module);
/* If we watch the object module, we can see a property "exports": {}, 
we can access to any value inside the exports property from any place
of the application */
