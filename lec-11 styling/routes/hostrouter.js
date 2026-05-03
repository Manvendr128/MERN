const path = require('path');
const express = require('express');
const hostrouter = express.Router();
hostrouter.get("/host/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../",'views','addhome.html'));
  ;
});


hostrouter.post("/host/add-home",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../",'views','homeadded.html'));
});

module.exports = hostrouter;