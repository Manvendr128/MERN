const http = require("http");
const testingsyntax = require("./syntax");
const runtime = require('./runtime');
const logical = require('./logical');
const handler = require('./user');
const server = http.createServer(handler);

server.listen(3000,()=>{
  console.log("server starts at http://localhost:3000");
})
// const server = http.createServer((req,res)=>{
//   console.log(req.url,req.method);
//   // testingsyntax();
//   // runtime();
//   logical();

// });

// server.listen(5000,()=>{
//   console.log("server starts at http://localhost:5000");
// })
