
const number = 20; // Integer number

const number_float = 20.20 // float number

//arithmetic operators ( use console.log() for see what happen)

const addition = 2 + 2; 
const subtraction = 10 - 5; 
const multiplication = 4 * 4; 
const division = 10 / 5 ;
const modulo = 11 % 2;
const exponent = 5 ** 2 // 5 x 5 = 25

// Math is a built-in object that has properties and methods for mathematicals

//Ej:

const pi = Math.PI; 

//Rounded
const round = Math.round(5.5); // return the value of a number rounded to the nearest integer

// Round to up

const toUp = Math.ceil(5.2);

// Round to low

const toLow = Math.floor(2.9);

// get a number random

const randomNumber = Math.random();
// Exist a many type o operations with math, but i only need the most common aritmethics operators


// Increment and decrement

let counter = 0;

counter++;// 1
counter ++// 2

--counter; //1
--counter; // 0
// Convert string to number 

const number1 = "20";
console.log(Number.parseInt(number1)); // Convert string to number int
const number2 = "20.2";
console.log(Number.parseFloat(number2));// Convert string to number float
const number3 = 20;
console.log(Number.isInteger(number3));