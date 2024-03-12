const express = require('express');
const router = express.Router();
const { YTModel } = require('./models/YT.js');


router.get('/get', (req, res) => {
    res.send('GET request to the homepage')
});

router.get('/YT', async (req, res) => {
    let result = await YTModel.find({});
    res.json({data:result});
    // console.log(result)
});

router.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

router.patch('/', (req, res) => {
    res.send('PATCH request to the homepage');
});

router.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
});

router.use(express.json())

router.post("/createUser", async (req,res) => {
    try {
        console.log('hello')
        console.log(req.body,'req')
        const user= new YTModel(req.body)
        await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).send(err)
        console.log(err)
    }
    
})

module.exports = router;
