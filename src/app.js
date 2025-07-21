console.log("Starting a new project!");
const express = require('express');
const app = express();
const port = 7777;

app.use("/",(err, req, res, next) => {
  if(err) {
    // Log your error
    res.status(500).send("something went wrong");
  }
});

app.get("/getUserData", (req, res) => {
  //try{
    // Logic of DB call and get user data
  throw new Error("lkajkljlk");
  res.send("User Data Sent");
 // } catch (err) {
  //  res.status(500).send("Some Error contact support team");
 // }  
});

app.use("/",(err, req, res, next) => {
  if(err) {
    // Log your error
    res.status(500).send("something went wrong");
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
