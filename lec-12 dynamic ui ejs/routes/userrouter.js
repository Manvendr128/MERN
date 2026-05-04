const path = require('path');
const express = require('express');
const userrouter = express.Router();

const {registeredhomes} = require('./hostrouter');
userrouter.get("/",(req,res,next)=>{
  console.log(registeredhomes);
  res.sendFile(path.join(__dirname,"../","views",'home.html'));
});

module.exports = userrouter;