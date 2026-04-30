const express = require('express');
const app = express();

// 2-dummy middleware
app.use((req,res,next)=>{
  console.log("first dummy middleware",req.url,req.method);
  next();
})
app.use((req,res,next)=>{
  console.log("second dummy middleware",req.url,req.method);
  next();
})

// third - middleware return response
// app.use((req,res,next)=>{
//   console.log("third middleware",req.url,req.method);
//   res.send('<h1>welcome to response page</h1>');
// })

// handling middleware

app.get('/',(req,res,next)=>{
  console.log("handling / for get",req.url,req.method);
  res.send('<h1>  Handling page </h1>')

})

app.get('/contact-us',(req,res,next)=>{
  console.log("now contact page",req.url,req.method);
  res.send(
    `
    <h1>Submit Details Here</h1>
    <form action = "/contact-us" method = "POST">
    <input type = "text" placeholder = "Enter your Name"/>
    <br>
    <input type = "E-mail" placeholder = "Enter your E-Mail"/>
    <br>
    <input type = "Submit"></input>

    </form>
    `
  );
})

app.post('/contact-us',(req,res,next)=>{
  console.log("Handling /contac-us",req.url,req.method);
  res.send('<h1>we will contact you shortly</h1>');
})

const port = 3001;
app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
})