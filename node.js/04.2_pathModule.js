/**
 * Module Path.
 * 
 * Is a usefull module that allow us to interact with file paths easily
 */

const path = require("path"); 

/* With .sep  we can know the plataforms specific separetor

for windowns  \
 */
console.log(path.sep); 

/* What do path.join()?

 The path.join() method joins all given path segments together using the platform-specific separator as a delimiter,
then normalizes the resulting path.
 */
const filePath = path.join("./content", "text.txt")
console.log(filePath)


// This method return the last part of a path
const base = path.basename(filePath)
console.log(base)

// The method resolve return a absolute path
const absolute = path.resolve(__dirname, "content", "text.txt");
console.log(absolute)