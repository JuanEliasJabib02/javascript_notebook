

const http = require('http');
const fs = require("fs");

const app = http.createServer((req,res) => {

    const url = req.url;
    const method = req.method;

    if(url === "/"){
        res.setHeader('Content-type', "text/html");
        res.write('<html>');
        res.write('<head><title>Node.js APP</title><head>');
        res.write('<body><form action="/route" method="POST"><input type="text name="route"><button type="submit">Send</button></form></body>');
        res.write('</html>'); 
        res.end();
    }

    if(url === "/route" && method === "POST"){
        fs.writeFileSync("message.text", "Learning Node.js");
        res.statusCode = 302;
        res.setHeader("Location", "/node.js");
        return res.end();   
    }
    

});


app.listen(4000);