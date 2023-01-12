
// How works the params in a function

const sum = (a, b) => {
  console.log(a + b)
}

sum(5, 6); // 5 are the arguments



// paramets by default

const hello = (name, lastname = "default value") => {
  console.log(`Hi ${name} ${lastname}`)
}

hello("juan")



// Rest params

/* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, */

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10
