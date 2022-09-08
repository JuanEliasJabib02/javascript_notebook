

const http = require('http')


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
        return;
    }

    if(url === "/route" && method === "POST"){
        res.setHeader('Content-type', "text/html");
        res.write('<html>');
        res.write('<head><title>Node.js APP</title><head>');
        res.write('<body><h1>Hello from Node.js ROUTER</h1></body>');
        res.write('</html>'); 
        res.end();
        return;
    }

});


app.listen(4000);