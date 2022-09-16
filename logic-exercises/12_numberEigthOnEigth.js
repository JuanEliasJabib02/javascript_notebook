
/* Give to the function a number a must be return the number in a patron of eight on eight

EJ:
100
92
84
*/

const patron = (number) =>{

  let result = `--- Del ${number} al 0 --- \n`;

  
  while (number > 0){

    result += `- nº${number}\n`;

    number -= 8;

  }

  result += "--- END"

  return result;

}

console.log(patron(100))