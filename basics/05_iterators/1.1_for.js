/**
 * 
 * The for statement  creates a loop.
 */

/* Syntax

for (initialization; condition; afterthought){
    statement
}
*/


for (let i = 0; i < 10; i++) {
  //statement
  console.log(i)
}


/* let i = 0 => is the initialization => Typically used to initialize a counter variable.*/


/* i < 10 => is the condition

An expression to be evaluated before each loop iteration. If this expression evaluates to true,
 statement is executed. If the expression evaluates to false, execution exits the loop and goes
  to the first statement after the for construct.

*/


/* 
  i++ - > is the afterthought , and expression to evualuated at the end of each loop iteration,
  this occurs before the next evualuation of condition, generally used to update or increment
  the counter viariable

 */



/* Examples using a for  */
  

const CART = [
  {
    name: "monitor",
    price:"200"
  },
  {
    name: "tv",
    price:"500"
  },
  {
    name: "pc",
    price:"1000"
  },

]

// using a for for iterate a array
for (let i = 0; i < CART.length; i++){
  console.log(CART[i].name)
}
