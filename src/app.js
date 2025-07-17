console.log("Starting a new project!");
const express = require('express')
const app = express()
const port = 7777

app.use('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/test', (req, res) => {
  res.send('Hello World! from test')
})
 app.use('/hello', (req, res) => {
  res.send('Hello World! hello')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
