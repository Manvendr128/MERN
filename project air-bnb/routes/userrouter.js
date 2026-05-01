const path = require('path');
const express = require('express');
const userrouter = express.Router();

userrouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../","views",'home.html'));
});

module.exports = userrouter;