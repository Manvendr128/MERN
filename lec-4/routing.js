const http = require("http");

const server = http.createServer((req,res)=>{
  console.log(req);
  if(req.url==='/'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>welcomt to home page</h1></body>')
  res.write('</html>');
  return res.end();
  }
  else if(req.url==='/products'){
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>check out our products</h1></body>')
  res.write('</html>');
  return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>Like / share / subscribe</h1></body>')
  res.write('</html>');
  res.end();
  });
const port = 3000;
server.listen(port,()=>{
  console.log(`server starts at http://localhost:${port}`);
});