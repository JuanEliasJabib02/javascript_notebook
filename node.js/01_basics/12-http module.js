/**
 * Http Module:
 * 
 * Is a module that allow Node.js to transfer data over the Hyper Text Tranfer Protocol(HTTP)
 */

const http = require("http");
/* 
The method createServer do what his name say, 
help us to create a server
 */

const server = http.createServer((req, res) => {
  
  if (req.url === "/") {
    res.write("welcome to our page")
    res.end()
  }
  if (req.url === "/about") {
    res.write("here our short history")
    res.end()
  }
  res.write("this route is not found");
  res.end();

})

server.listen(4000)