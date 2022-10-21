// Hallar el total de una carrito usando reduce

const Cart = [
  {
    name: "Macbook",
    price: 1500
  },
  {
    name:"Iphone",
    price:300
  },
  {
    name:"Monitor",
    price:100
  },
]

// Sum the total of all products in the cart
const totalPrice = Cart.reduce((total, product) => {

  const calculatePrice = total + product.price;

  return calculatePrice

}, 0)

console.log(totalPrice)