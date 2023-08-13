/**
 * Promise chain:
 * 
 * A common need is to execute two or more asynchronous operations back to back,
 *  where each subsequent operation starts when the previous operation succeeds, 
 * with the result from the previous step. We accomplish this by creating a promise chain.
 */

/* Example of a promise chain */

const CART = [];

const addFruits = fruit => new Promise(resolve => {
  setTimeout(() => {
    CART.push(fruit)
    resolve(`adding fruit ${fruit}`)
    },3000)
})
addFruits("Banana")
  .then(result => {
    console.log(result)
    console.log(CART)
    return addFruits("Apples") // Chaining
  })
  .then(result => {
    console.log(result)
    console.log(CART)
    return addFruits("orange")
  })
  .then(result => {
    console.log(result)
    console.log(CART)
  })


  // Is possible do a chain after a catch? Res: yes

  // Example

  new Promise((resolve, reject) => {
    console.log("Initial");
  
    resolve();
  })
    .then(() => {
      throw new Error("Something failed");
  
      console.log("Do this");
    })
    .catch(() => {
      console.error("Do that");
    })
    .then(() => {
      console.log("Do this, no matter what happened before");
    });