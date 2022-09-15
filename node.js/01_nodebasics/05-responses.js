

const http = require('http')


const app = http.createServer((req,res) => {
    res.setHeader('Content-type', "text/html");
    res.write('<html>');
    res.write('<head><title>Node.js APP</title><head>');
    res.write('<body><h1>Hello from Node.js</h1></body>');
    res.write('</html>');
    
});


app.listen(4000);