const http = require('http')


const app = http.createServer((req,res) => {
    console.log(req);
});


app.listen(4000); // watch localhost