// Exercise: Reverse a string without using methods of js only structure control

const reverse = (string) => {

  let reverseString = "";

  for( let letter of string) {
     reverseString = letter + reverseString
  }

  return console.log(reverseString)
  
}


reverse("dog")