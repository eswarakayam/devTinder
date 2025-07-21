console.log("Starting a new project!");
const express = require('express');
const app = express();
const {adminAuth,userAuth } = require('./middlewares/auth');
const port = 7777;

app.use("/admin", adminAuth);

app.post("/user/login", (req,res)=>{
  res.send("user logged in successfully!");
});

app.get("/user", userAuth, (req, res) => {
  res.send("User Data Sent");
});

app.get('/admin/getAllData',(req,res,next) => { 
  console.log("admin get all data route 2 nd level");
  res.send("send admin data");
})
app.get('/admin/deleteUser',(req,res,next) => {  
  res.send("Deleted a user");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
