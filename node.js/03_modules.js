// Modules

/**
 * Modules are used to split our code in differents files that we can
 * access them all throughout the application, doing that, we would have 
 * smaller files and more strucuture to our application.
 * 
 * Thats is what modules allow us and his utility in the code.
 * 
 * This main idea behind this is encapsulate code only sharing
 * what we want to share.
 * 
 * //CommonJs every file is module()
 * //Modules 
 */

/*  To access to the object exports we have to use required
  and the path of the module.
 */
const { sayHello } = require("./03.1_modulesExample.js")

const juan = "Juan";
const petter = "peter";



/* sayHello("Dante");
sayHello(juan);
sayHello(petter);

 */

require("./03.2_mind-grenade");