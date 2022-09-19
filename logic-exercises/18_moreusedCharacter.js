/* 
  Give to the function a string and must be return the characters most repeat in her
*/


const repeat = (string) => {
  
  let map = {};

  let max_rep = 0;

  let letterMax = 0;

  for(let i = 0; i < string.length; i++){
    
    if(!map[string[i]]) {
      map[string[i]] = 1;
    } else {
      map[string[i]]++
    }
  }
  
  for( letter in map) {

    if(map[letter] > max_rep){
      max_rep = map[letter];
      letterMax = letter;
    }
  }
  
  return console.log(`${letterMax} appear on the string ${max_rep} times`)
}


repeat("silentcatimworking")
