// odd = impar

// Return a function that able us to know how many odd numbers are beetween x number a y number


const oddNumber = (number1, number2) => {

  let number = 0;

  let array = [];

  //Make array to save the numbers
  //Print number of number 1 to number 2 and save it in the array
  // iterate the array and if the number module is !0 is odd

  while(number <= number2 ) {

    array.push(number++)
    
  }

  return array.forEach(number => {
      if((number % 2) == !0) {
        console.log(number +" is ODD")
      } else {
        console.log(`${number}`)
      }
  })  

}

oddNumber(1,100)



