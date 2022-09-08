const http = require("http");
const fs = require("fs");


const server = http.createServer( (req,res) => {

  const url = req.url;
  const method = req.method;

  if (url === "/") {
      res.setHeader('Content-Type','text/html');
      res.write("<html>");
      res.write("<head><title>Exercise node.js</title></head>");
      res.write("<body><form action='create-user' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></form></body>");
      res.write("</html>");
      res.write("</html>");
      return res.end();
  } else if (url === "/users") {

    res.setHeader('Content-Type','text/html');
    res.write("<html>");
    res.write("<head><title>Exercise node.js</title></head>");
    res.write("<body><ul><li>User 1</li> <li>User 2</li></body>");
    res.write("</html>");
    res.write("</html>");
    return res.end();

  } else if (url === '/create-user'){
    const body = []
    req.on('data',(chunk) => {
        body.push(chunk);
    });
      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split("=")[1]);
      });

      res.statusCode = 302;
      res.setHeader("Location","/");
      res.end();
  }

  
})


server.listen(4000);