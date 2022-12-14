/**
 * 
 * 
 * Make a new string from the first, mid and last character
 * 
 * Input: "string"
 * 
 * 
 * Steps:
 * 
 * 1. Get the first character
 * 2. Get string length
 * 3. Get middle index
 * 4. concatenate first character and middle character
 * 5. get last character and concatenate to the first and middle
 * 
 * output : ""
 */


const newString = (string) => {


  const first = string[0]
  const middle = string[(string.length / 2)]
  const last = string[(string.length - 1)]

  const newString = `${first}${middle}${last}`

  return newString
}

console.log(newString("string"))