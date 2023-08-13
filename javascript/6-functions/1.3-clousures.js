/**
 * 
 * Clousures: 
 * 
 * A clousure is when a function can remenber and access its lexical scope even when was invoked
 * outside its lexical scope
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

