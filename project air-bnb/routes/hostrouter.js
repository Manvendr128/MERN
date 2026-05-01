const express = require('express');
const hostrouter = express.Router();
hostrouter.get("/host/add-home",(req,res,next)=>{
  res.send(
    `<h1>Here You can Add your Home Please Submit your details</h1>
    <form action="/host/add-home" method="post">
    <input type = "text" placeholder="Enter Your Home Name Here"/>
    <input type = "Submit" />
    </form>
    `
  );
});


hostrouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
  res.send(
    `<h1>Home Registered Succesfully</h1>
    <a href = "/">Go to Home Page</a>
    `
  );
});

module.exports = hostrouter;