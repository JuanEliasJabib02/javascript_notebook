/*
Use default parameters instead of short circuiting or conditionals

Default parameters are often cleaner than short circuiting. Be aware that if you use them,
your function will only provide default values for undefined arguments. Other "falsy" values
such as '', "", false, null, 0, and NaN, will not be replaced by a default value.
*/


//BAD

/* 
function createMicrobrewery(name) {
  const breweryName = name || "Hipster Brew Co.";
  // ...
}
 */


//GOOD

function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}