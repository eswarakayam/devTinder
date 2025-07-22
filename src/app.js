console.log("Starting a new project!");
const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const port = 7777;
app.use(express.json());
app.post("/signup", async (req,res) =>{
  // Create a new instance of the User model
   const user = new User (req.body);
   
  try{
    await user.save();
    res.send("User added Successfully");
  } catch(err){
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
.then(() => {
    console.log("Database connection established...");
    app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})
}).catch((err) => {
    console.error("Database cannot be connected!!");
})
