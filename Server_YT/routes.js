require('dotenv').config(); 
const express = require('express');
const router = express.Router();
const { YTModel,UserModal } = require('./models/YT.js');
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');


router.use(bodyParser.json());

router.get('/get', (req, res) => {
    res.send('GET request to the homepage')
});

router.get('/YT', async (req, res) => {
    try {
        let result = await YTModel.find({});
        res.json({ data: result });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/User', async (req, res) => {
    try {
        let result1 = await UserModal.find({});
        res.send({user: result1});
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/postUser', (req, res) => {
    console.log(req.body.user);
    UserModal.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err));    
});

router.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

router.patch('/', (req, res) => {
    res.send('PATCH request to the homepage');
});

router.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    YTModel.findByIdAndDelete({ _id: id })
        .then(deletedUser => res.json(deletedUser))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

router.use(express.json());

router.post("/createUser", async (req, res) => {
    try {
        const user = new YTModel(req.body);
        await user.save();
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    YTModel.findById({ _id: id })
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
});

router.put('/updateUser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await YTModel.findByIdAndUpdate({ _id: id }, req.body);
        res.json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/auth',(req,res) => {
    const {username} = req.body;
    const token = jwt.sign({username: username}, "secretkey")
    console.log(token)
    res.send(token)
})


module.exports = router;
