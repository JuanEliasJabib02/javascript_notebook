/**
 * 
 * Symbol is a  javascript primitive data type 
 * 
 * A symbol value returned from Symbol() is unique
 * 
 * A symbol value may be used as an indentifier for object
 * properties; this is the data type´s only purpose
 */

const symbol = Symbol();

const s1 = Symbol();
const s2 = Symbol("123");
const s3 = Symbol("Juan");

console.log(s1);
console.log(s2);
console.log(s3);

//Proof symbols are unique

console.log(Symbol(42) == Symbol(42));
console.log(Symbol(42) === Symbol(42));

