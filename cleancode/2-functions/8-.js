/* 
8-Don't use flags as function parameters

Flags tell your user that this function does more than one thing. 
Functions should do one thing. Split out your functions if they are 
following different code paths based on a boolean.

 */


//BAD

function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}


//GOOD

function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}