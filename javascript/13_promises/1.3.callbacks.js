/**
 * What is a callback?
 * 
 * A callback function is  a function passed into another function as an argument,
 * which is then invoked inside the outer function to complete some kind of route
 * or action
 */

// Example
function callback() {
  console.log("hi from the callback")
}


function print(callback) {
  callback();
}

print(callback);


// Example two

const message = () => {
  console.log("this message is shown after 3s")
}

setTimeout(message/* Callback */, 10000);


/* Example 3 */

const countries = ["Colombia", "Argentina", "Mexico"];

function newCountry(country,callback) {
  setTimeout(() => {
    countries.push(country);
    callback();
  },2000)
}

function showCountries() {
  setTimeout(() => {
    countries.forEach(country => {
      console.log(country)
    })
  },1000)
}

showCountries();

newCountry("Usa", showCountries);