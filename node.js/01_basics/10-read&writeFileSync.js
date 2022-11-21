const { readFileSync, writeFileSync } = require("fs");

/* The method readFiles is used to read files in the computer */

const first = readFileSync("./content/sub-folder/firstText.txt","utf8");
const second = readFileSync("./content/sub-folder/secondText.txt", "utf8");
console.log(first);
console.log(second);

/**
 * The fs.writeFile() method replaces the specified file and content if it exists.
 * If the file does not exist, a new file, containing the specified content,
 * will be created.
 */
writeFileSync("./content/sub-folder/resultSycn.txt" ,`${first}`)