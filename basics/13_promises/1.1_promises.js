/**
 * What is a promise?
 * 
 * A Promise is an object representing the eventual completion or failure 
 * of an asynchronous operation
 * 
 * Promises are used to handle asynchronous operations in JavaScript. 
 * They are easy to manage when dealing with multiple asynchronous operations
 * where callbacks can create callback hell leading to unmanageable code.
 * 
 * Promises are the ideal choice for handling asynchronous operations in the simplest manner.
 * They can handle multiple asynchronous operations easily and provide better 
 * error handling than callbacks and events. 
 * 
 * 
 */

const applyDisccount = new Promise((resolve,reject) => {

  const disccount = false;

  if (disccount) {
    resolve("DISCCOUNT 50% ") // The promise is fullfilled
  }
  else {
     reject("ERROR CANT APPLY DISCOUNT") // The promises is not fullfiled
  }
})


//The promises  has 3 posible values
/**
 * fullfilled -> The promise is fullfilled
 * rejected - > The promise is not fulfilled
 * peding -> waiting for a result
 */

//The promises have 2 methods .then y .catch

/* Then method return a promise, it takes up two arguments
  callback function for the success and deal only with fullfilled cases

  Catch  method returns a promise and deal with reject cases only,
  is used for error handling
 */
applyDisccount
    .then(result => console.log(result))
    .catch(err => console.log(err)) 