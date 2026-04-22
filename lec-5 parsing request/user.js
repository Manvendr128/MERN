// const http = require("http");
const fs = require("fs");
const requesthandler = (req,res)=>{
  console.log(req.url,req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your Details:</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male" />')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female" />')
    res.write('<br><input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase()==='/submit-details' && req.method=="POST"){
  //CHUNKS

    // req.on('data',chunk=>{
    //   console.log(chunk);
    // })
    
    // data ko print krwana hai chunks wale ko
  const body = [];
    req.on('data',chunk=>{
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',()=>{
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);

      // object bnkr cheeje aa gyi
      // parsing of data
      const params = new URLSearchParams(fullbody);
      // const bodyobject = {};
      // for(const [key,val] of params.entries()){
      //   bodyobject [key] = val;
      // }

      // other method

      const bodyobject = Object.fromEntries(params);
      console.log(bodyobject);
      fs.writeFileSync('user.txt',JSON.stringify(bodyobject));
    })
  
  
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title></title></head>');
    res.write('<body><h1>"You have Submit your details."</h1></body>');
    res.write('</html>');
    return res.end();
    
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding </title></head>');
  res.write('<body><h1>Like / share / subscribe</h1></body>')
  res.write('</html>');
  res.end();
  };

  module.exports = requesthandler;
// const port = 3000;
// server.listen(port,()=>{
//   console.log(`server starts at http://localhost:${port}`);
// });