const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    res.send('GET request to the homepage')
});

router.post('/post', (req, res) => {
  res.send('POST request to the homepage')
});

router.patch('/patch', (req, res) => {
    res.send('PATCH request to the homepage')
});

router.delete('/delete', (req, res) => {
    res.send('DELETE request to the homepage')
});

module.exports = router;