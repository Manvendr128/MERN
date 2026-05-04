const path = require('path');
// external module
const express = require('express');
//local module
const userrouter = require('./routes/userrouter');
const {hostrouter} = require('./routes/hostrouter');
// const{registeredhomes} = require('./routes/hostrouter')
const app = express();
app.set('view engine','ejs');
app.set('views','view');
app.use(express.urlencoded({ extended: true }));

//middleare for static writeFileSync
app.use(express.static(path.join(__dirname,'public')));

// app.use((req,res,next)=>{
//   // ab har request console ni likhna pdega kuki 
//   console.log(req.url,req.method);
//   next();
// })

// app.use(express.urlencoded());

app.use(userrouter);
app.use('/host',hostrouter); // common path use ho rha hai aage wala

// order me honi chaiye cheeje
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));// isme back ni jayenge kuki views already isi mein hai
})

const port = 3001;
app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});
