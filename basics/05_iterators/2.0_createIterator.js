/* 
We can create our own iterator like for in ect...

using the function constructor

*/

function newIterator(arr) {
  let i = 0;

  return {
    next() {
      const end = (i >= arr.length);
      const valor = !end ? arr[i++] : undefined ;
      
      return {
        end,
        valor
      }
    }
  }
}

const CART = ["product1", "product2", "product3"]; 

const iterateCart = newIterator(CART);

console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());


//using the iterator