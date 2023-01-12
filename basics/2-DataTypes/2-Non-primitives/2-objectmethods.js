"use strict"; // Defines that JavaScript code should be executed in "strict mode".
const Product = {
    name: "Macbook pro M1 2022",
    price: 1500,
    available: true,
    info: {
        size: {
            weight: "1kg",
            screen: " 15 inches"
        },
        manufacturing: {
            country: "China"
        }
    }
}
Object.freeze(Product) // prevent the modification of the object propeties

// Object.seal(Product) // With seal cant add or delete keys of the object but if possible modify the alredy exist keys

// How to concat 2 objects

const Person = {
    name: "juan",
    age: 26
}

const Measures = {
    height: "1.82m",
    weight: "70kg"
}

//First way
const finalPerson = Object.assign(Person, Measures);
//console.log(finalPerson);

//Second way , spread operator

const personFinal = { ...Person, ...Measures } // This way is more used
//console.log(personFinal);


// Functions in objects and this.key 

const Car = {
    model: "chevrolet camaro",
    color: "Black",
    price: 500,

    showInfo: function () {
        console.log(`the car ${this.model} has a price of ${this.price}`)
        // with the help of this , the propertie is searching inside the object,
        // is a way to reference the same object
    }
}
Car.showInfo()


// More objects methods


const Book = {
    pages: 100,
    name: "Harry potter"
}

console.log(Object.keys(Book)); // Return the keys of the objects

console.log(Object.values(Book));//Return the values of the object

console.log(Object.entries(Book)); // Return the keys and values of the objects

