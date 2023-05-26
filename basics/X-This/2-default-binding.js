/*1.Default Binding */

/* Default binding refers to how this is the global context whenever a function 
  is invoked without any of these other rules. If we aren't using a dot and we 
  aren't using call(), apply(), or bind(), our this will be our global object.

  Your global context depends on where you're working. If you're in the browser, 
  this will be the window. When programming in strict mode, the global context is undefined.
  */

function globalContext() {
  console.log(`hello im `, this);
}

// A good practice is not use this in global contex
globalContext();

  // global === objectGlobal(node) === windows(client)
