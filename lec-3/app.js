const http = require("http");

const server = http.createServer((req,res)=>{
  console.log(req);
  // process.exit(); // stops event loop
});
const port = 3000;
server.listen(port,()=>{
  console.log(`server starts at http://localhost:${port}`);
});