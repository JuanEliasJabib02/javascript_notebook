
// A object is a variable that can contain many values


//properties:value

// Object literal
const User = {
    name:"Juan Elias",
    email: "juaneliasjabib02@gmail.com",
    password: "passdificil123"
}

// Acces to objects properties
console.log(User.name)

// Add properties to the object
User.age = 26;

/* console.log(User) */

// Delete properties to the object
// delete User.name;


 // Destructuring: is a JS expression that makes it possible to unpack values from and array
 // or properties from a object into distinc variables

 const {name, email} = User;


 // Objects inside Objects

 const Product = {
    name:"Macbook pro M1 2022",
    price: 1500,
    available:true,
    info:{
        size:{
            weight:"1kg",
            screen:" 15 inches"
        },
        manufacturing:{
            country:"China"
        } 
    }
 }
 console.log(Product.info.manufacturing.country);

 // Destructuring a object inside objects

 const {info:{size:{screen}} } = Product;

/*  console.log(screen) */





