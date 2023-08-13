
// A 'const' has to be initialized with a value.
const dog = "Dante";

console.log(dog)

// A 'const' cannot be reassigned.s
dog = "Messi" 

// Scope has block scope.
const scope = () => {
  const cat = "meow";
}

console.log(cat) // Cat cant be initializate here because was initializate inside the block scope

// typeOf for see the type of data

console.log(typeof (dog)) // is a string




