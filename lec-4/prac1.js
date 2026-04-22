const http = require("http");
const server = http.createServer((req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/home'){
    res.write("Welcome to the Home Page.");
    return res.end();
  }
  else if(req.url==='/men'){
    res.write("Welcome to the Men Outfits.")
    return res.end();
  }
  else if(req.url==='/women'){
    res.write("welcome to the Women Outfits.")
    return res.end();
  }
  else if(req.url==='/kids'){
    res.write("welcome to the Kids Outfits.")
    return res.end();
  }
  else if(req.url==='/carts'){
    res.write("welcoome to Carts");
    return res.end();
  }

  res.write(
`<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/men">men</a></li>
      <li><a href="/women">women</a></li>
      <li><a href="/kids">kids</a></li>
      <li><a href="/carts">cart</a></li>
    </ul>
  </nav>
</body>
</html>`
);
res.end();
});
const port = 5000;
server.listen(port,()=>{
  console.log(`server is runing on http://localhost:${port}`);
})