//core module
// const http = require("http");
//external module
const express = require('express'); 
const app = express();
//local module
const handler = require('./user');

//Adding Middleware

// app.use("/",(req,res,next)=>{
//   console.log("came in first middleware",req.url,req.method);
//   // res.send('<p>Welcome to first Page</p>')
//   // res.send ke baad next call nhi kr skte hai
//   next(); // ye aage wale pr bhejega ye hta diya too agli middleware nhi chlegi
// });

app.get("/",(req,res,next)=>{
  console.log("comt to first middlware",req.url,req.method);
  // res.send('<p> welcome to first page</p>');
  next();

})
// second-middleware

app.post("/submit-details",(req,res,next)=>{
  console.log("came in third middleware",req.url,req.method);
  //Sending response
  res.send('<p>Welcome to Coding Page</p>')
})
app.use("/",(req,res,next)=>{
  console.log("came in second middleware",req.url,req.method);
  res.send('<p>Welcome to second Page</p>')
  next(); // ye aage wale pr bhejega ye hta diya too agli middleware nhi chlegi
});
//third- middleware



//liostening server
app.listen(3000,()=>{
  console.log("server starts at http://localhost:3000");
})

