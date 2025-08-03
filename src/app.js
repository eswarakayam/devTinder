console.log("Starting a new project!");
const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignupData} = require("./utils/validation");
const bcrypt = require('bcrypt');

const port = 7777;
app.use(express.json());
app.post("/signup", async (req,res) =>{
try {
  // Validation of data
  validateSignupData(req);

  const { firstName, lastName, emailId, password } = req.body;
 

//Encrypt the password
const passwordHash = await bcrypt.hash(password,10);
console.log(passwordHash);

  // Create a new instance of the User model
   const user = new User ({
    firstName,
    lastName,
    emailId,
    password: passwordHash,
   });

    await user.save();
    res.send("User Added Successfully");
  } catch(err){
    res.status(400).send("ERROR: "+ err.message);
  }
});

app.post("/login",async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });

    if(!user){
      throw new Error("Invalid credentials");
    }
    const isPasswordValid = await bcrypt.compare(password,user.password);

    if(isPasswordValid){
      res.send("Login Successful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
})
// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  
   try {
    const users = await User.findOne({emailId: userEmail});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
}); 

// Get user by email
app.get("/userId", async (req, res) => {
  const userId = req.body.id
  
   try {
    const users = await User.findById(userId);
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
}); 

// Feed API - GET/ feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try{
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }

})
// Delete a user from the database
app.delete("/user", async(req,res) =>{
  const userId = req.body.userId;

  try{
    const user = await User.findByIdAndDelete(userId);

    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
// Update a user from the database

app.patch("/user", async (req,res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({ _id: userId }, data,{
      returnDocument: "after",
      runValidators: true,
    });
    console.log(users);
    
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("UPDATE FAILED:"+ err.message);
  }
})
connectDB()
.then(() => {
    console.log("Database connection established...");
    app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})
}).catch((err) => {
    console.error("Database cannot be connected!!");
})
