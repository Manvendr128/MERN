const http = require("http");
const handler = require('./user');
const server = http.createServer(handler);

server.listen(3000,()=>{
  console.log("server starts at http://localhost:3000");
})