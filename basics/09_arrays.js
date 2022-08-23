// Arrays

const Cars = ["Bmw", "Chevrolet camaro", "Toyota", "Mazda 6"]

//Access an array item by its index
console.log(Cars[3]); // Mazda 6

// know the lenght of the array
console.log(Cars.length);

//The last index of an array  is always array.length -1 
console.log(Cars.length - 1 ); // Mazda 6 

// Find the index of an item an array
console.log(Cars.indexOf("Mazda 6"))

// check if an array contains a certain item
console.log(Cars.includes("Mazda 6")) // True

// Append an  item to an array
console.log(Cars.push("Spark"))


//iterate a array

const cart = [

    {
        name: "Monitor",
        price: 500
    },

    {
        name: "Iphone",
        price: 2000
    },

    {
        name: "Pc gamer",
        price: 1000
    },

    {
        name: "Audiphones",
        price: 100
    },
]


//.forEach
cart.forEach( (product) => {
    console.log(`${product.name} - Precio: ${product.price}`)
})

//.map
const newArray = cart.map( (product) => {
    return `${product.name} - Precio: ${product.price}`
})


// Whats the different between .map and foreach?
// That foreach only iterate the array and map iterate the array and return a new array 