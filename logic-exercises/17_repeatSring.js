// give to the function a string and must be returned the string repeat many times as the number indicate

const repeatString = (string, number) => {

    let repeat = "";

  for( let i = 0; i < number; i++) {
    
    repeat += string
  }

  console.log(repeat)
}


repeatString("Dante",10)