// Give to the function a number INT and the function must be return the reverse number  INT
//  Ej: 74 --> 47


const reverseNumber = (number) => {

    const NumberToString = number.toString();
    const splitString = NumberToString.split("");
    const reverseString = splitString.reverse();
    const joinString = reverseString.join("");
    const stringToInt = parseInt(joinString);

   
    return console.log(stringToInt)

}


reverseNumber(74)