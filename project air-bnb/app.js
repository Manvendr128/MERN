// external module
const express = require('express');
//local module
const userrouter = require('./routes/userrouter');
const hostrouter = require('./routes/hostrouter');
const app = express();

app.use((req,res,next)=>{
  // ab har request console ni likhna pdega kuki 
  console.log(req.url,req.method);
  next();
})

app.use(express.urlencoded());

app.use(userrouter);
app.use(hostrouter);
const port = 3001;
app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});
