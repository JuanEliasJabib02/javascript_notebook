const http = require('http')

// Our node app is managed by the event loop
const app = http.createServer((req,res) => {
    console.log(req);
    // process.exit();
    
    // Typical we never use process.exit in the code because we dont want to quit our server
    // But is important know how work the event loop
});


app.listen(4000); // watch localhost