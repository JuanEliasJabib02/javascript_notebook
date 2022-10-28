/**
 * What is the callback hell?
 * 
 * Its appears when we have to much anidate functions
 */


const countries = []


function newCountry(country, callback) {
  countries.push(country);
  console.log(`adding ${country}`);
  callback();

}

function showCountries(){
  console.log(countries)
}

function initCallBackHell() {

  /* This is a callback hell  */
  setTimeout(() => {
    newCountry("Colombia", showCountries);
    setTimeout(() => {
      newCountry("Germany", showCountries);
      setTimeout(() => {
        newCountry("France", showCountries)
        setTimeout(() => {
          newCountry("France", showCountries)
        })
      },3000)
    },3000)
  },3000)
}

initCallBackHell();