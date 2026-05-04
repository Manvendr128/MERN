const path = require('path');
const express = require('express');
const { register } = require('module');
const hostrouter = express.Router();
hostrouter.get("/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../",'views','addhome.html'));
  ;
});
 // dynamic UI
const registeredhomes = [];



hostrouter.post("/add-home",(req,res,next)=>{
  console.log('home registration successful for:',req.body,req.body.housename);
  
  registeredhomes.push({housename:req.body.housename});
  res.sendFile(path.join(__dirname,"../",'views','homeadded.html'));
});

// module.exports = hostrouter;
exports.hostrouter = hostrouter;
exports.registeredhomes = registeredhomes;