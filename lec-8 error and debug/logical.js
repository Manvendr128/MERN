const logical = ()=>{
  let num = 5;
  if(num=20){ // assignment instead of comparison
    console.log(num);
  }
  else{
    console.log("num is not 10");
  }
};

module.exports = logical;