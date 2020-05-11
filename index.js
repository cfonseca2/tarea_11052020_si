const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Mi primer server corriendo en http://localhost:3000"')
  console.log('Mi primer server corriendo en http://localhost:3000');
})

app.listen(3000)
