const express = require('express');
const app = express();
const Router = require('./routes'); 
const port = process.env.PORT || 3000;
const { connected, isConnected } = require('./config/dB');

app.use('/', Router); 
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

if (require.main === module) {
  connected();
  app.listen(port, async () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}