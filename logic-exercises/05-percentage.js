// Exercise: how much is the (x)% of x number

const percentage = (percentage,number) =>{


    const total = (percentage / 100) * number;

   
    return console.log(`the ${percentage}% of ${number} is ${total}`)

}

percentage(50,10)


