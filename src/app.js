console.log("Starting a new project!");
const express = require('express')
const app = express()
const port = 7777

// /ac, //abc
app.use("/user", (req,res,next) => {
  console.log("this is Request 1");
  next();
 // res.send('Route1');
  
},
(req,res,next) => {
  console.log("this is Handler 2");
  //res.send("Route2");
  next();
},(req,res,next) => {
  console.log("this is Handler 3");
 // res.send("Route3");
  next();
},[(req,res,next) => {
  console.log("this is Handler 4");
  //res.send("Route4");
  next();
},(req,res,next) => {
  console.log("this is Handler 5");
  res.send("Route5");
}])


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
