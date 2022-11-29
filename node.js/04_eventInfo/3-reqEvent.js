const http = require("http");

// Using event emitter API

const server = http.createServer();

//Emits request event
//Subscribe to it //Listen to it /respond to it
server.on("request", (req, res) => {
  res.end("welcome");
})


server.listen(4000)