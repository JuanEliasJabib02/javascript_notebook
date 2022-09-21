// Given a two numbers to the function and know if the number if dividers of the other


 /* 
  INPUT 1:20


  OUTPUT: 1,2,3,4,5,10,20
 */

const dividers = (number) => {

    const numbers = [];

    for(let i=1; i <= number; i++) {

      if(number % i === 0){
        numbers.push(i)
      }
    }

    return console.log(`the divisors of ${number} are ${numbers}`)

}

dividers(20)