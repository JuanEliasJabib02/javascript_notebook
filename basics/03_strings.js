
const string = "Hello, welcome to tecnoWRLD";


// Strings methods (use console.log() for see what happen )

const string_lenght = string.length // return the lenght of characters of a string

const string_toUpperCase = string.toUpperCase(); // CONVERT ALL THE STRING TO UPPERCASE

const string_toLowerCase = string.toLowerCase(); // convert all the string to lowercase

const string_includes = string.includes("cat")// return true if includes find the string ,
                                               // if not return false
const trimStart = string.trimStart(); // Removes the leading white space

const trimEnd = string.trimEnd();// remove the trailing white space 

const string_replace = string.replace("Hello","Hola"); // Replace a text in a string

const string_slice = string.slice(0, 6); // to slice a text , the first value is where begin
                                         // the slice and the second value is when end the slice
//Equal to string.slice
const string_substring = string.substring(0,6);

const string_repeat = string.repeat(3);


const animals = "Dog,Cat,Cow,Chicken";
const string_split = animals.split(","); // Split the string a return it as an array

// Convert a number to a stirng

const number = 10

const number_toString = number.toString();

// Concat a string

const name = "Juan";
const last_name = "Jabib";

const string_concat = name.concat(last_name);
//console.log(string_concat)

const string_concat2 =  name + " " + last_name;
//console.log(string_concat2);

// templates strings for concat variables

const template_string =  ` your name is ${name} and your lastname is ${last_name}`;
//console.log(template_string)

