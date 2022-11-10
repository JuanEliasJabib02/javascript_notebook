/**
 * 
 * Clousures:
  is "when you have a function defined inside of another function,
  that inner function has access to the variables and scope of the outer function even
  if the outer function finishes executing and those variables are no longer accessible 
  outside of that function."
 * 
 * Note: Free variables are variables that are neither locally declared nor passed as parameter.
 */

// Example 1: Using clousures to protect a variable

function outerFunction() { 

  let _counter = 0; // _counter is the local variable created by Counter

  function innerFunction() {
    //showCounter() is the inner function, a clousure
    console.log(_counter)
  }
  _counter++

  return innerFunction
}
const counter = outerFunction()
counter(); //1

