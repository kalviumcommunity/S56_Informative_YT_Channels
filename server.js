const express = require('express');
const app = express();
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hello World!!!')
})

app.get('/ping', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => {
  console.log('Server is working fine')
})


