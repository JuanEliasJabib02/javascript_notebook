/* Make a new string from the 3 characters of the mid of other string */


/**
 * INPUT: STRING
 * 
 * STEPS: 
 * 
 * 1.get the middle string
 * 2. get the character before the middle string
 * 3. get the character after the middle string
 * 4. concatenate 
 * 
 * OUTPUT: RIN
 */
const newString = (string) => {

  const middle = parseInt(string[(string.length / 2)], 0)
  const beforeMiddle = string[(string.length / 2) - 1]
  const afterMiddle = string[(string.length / 2) + 1]

  const newString = `${beforeMiddle}${middle}${afterMiddle}`
  return newString
}


console.log(newString("string"))