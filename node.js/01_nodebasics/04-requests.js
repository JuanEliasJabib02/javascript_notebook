// The headers are metadata added to a request also to responses too


const http = require('http')


const app = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers); 
    // These are the most important fields of the requests
});


app.listen(4000);