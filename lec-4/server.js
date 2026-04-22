const http = require("http");

const server = http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>Like / share / subscribe</h1></body>')
  res.write('</html>');
  res.end();
  // process.exit(); // stops event loop
});
const port = 3000;
server.listen(port,()=>{
  console.log(`server starts at http://localhost:${port}`);
});