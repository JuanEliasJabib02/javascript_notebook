const { readFile, writeFile, read } = require("fs");


/* The method readFiles is used to read files in the computer
This method work as async method.
 */ 
readFile("./content/sub-folder/firstText.txt","utf8" ,(err, result) => {
  if (err) {
    console.log(err);
    return
  }
  const first = result;
  readFile("./content/sub-folder/second.txt", "utf8", (err, result) => {
    
    if (err) {
      console.log(err);
      return
    }
    const second = result;

    writeFile("./content/sub-folder/newText.txt", `${first} +${second}`, (err,result) => {
      if (err) {
        console.log(err);
        return
      }
      console.log(result)

    })
  })
})



//PD: This was a example too of a callback hell.