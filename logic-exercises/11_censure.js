/* Give a text and a search to the fuction and must be return the text with the [censured] word
 */


const censured = (text = false,search = false) => {
  // How many times are the word  in the text
  //what are the index of the words
  // Changes the words

  let result;

  if(!text && !search){
    result = "Cant read the text and search"
  } else if(!text && search){
    result = "Cant read the text"
  } else if (text && search){
    result = text.replace(new RegExp(search, "gi"), "[CENSURED}");
  }

  return result;

  


}


console.log(censured("This world wrong have been change beucase is wrong","wrong"))