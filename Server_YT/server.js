//put all the import statements
const express = require('express');
const Router = require('./routes');
require('dotenv').config()
const { connected, isConnected } = require('./config/dB');
const cors = require('cors');

//call the functions next
const port = process.env.PORT || 3000;
const app = express();

//use of middlewares
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  try {
    res.json({
      database: isConnected() ? 'connected' : 'disconnected',
    });
  } catch (err) {
    console.log(err); 
  }
});

app.get('/ping', (req, res) => {
  try {
    res.send('Hello');
  } catch (err) {
    console.log(err);
  }
});
app.use(Router); 
if (require.main === module) {
  connected();
  app.listen(port, async () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}