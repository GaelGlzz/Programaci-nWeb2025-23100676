const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hola mundo! pero con get')
})

app.post('/', (req, res) => {
  res.send('hola mundo! pero con post')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
