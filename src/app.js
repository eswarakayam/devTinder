console.log("Starting a new project!");
const express = require('express')
const app = express()
const port = 7777


app.get('/user',(req,res) => {
  res.send('{firstname:"eswar",lastname:"reddy"}');
})
app.post('/user',(req,res)=>{
  res.send("Data saved successfully");
})
app.delete('/user',(req,res) => {
  res.send("Deleted successfully");
})
app.put('/user',(req,res)=>{
  res.send("Entire Data updated successfully");
})
app.patch('/user',(req,res) => {
  res.send("Give data is modified successfully");
})
// app.use('/test', (req, res) => {
//   res.send('Hello World! from test')
// })
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
