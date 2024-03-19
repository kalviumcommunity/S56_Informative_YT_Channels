require('dotenv').config(); 
const express = require('express');
const router = express.Router();
const { YTModel } = require('./models/YT.js');
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

app.post('/auth',async(req,res)=>{
    
    try{
        const{username,password} = req.body
        const user ={
            "username": username,
            "password": password
        }
        var token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
        console.log(token)
        res.send(token)
        res.cookie('token',token,{maxAge:365*24*60*60*1000})

    }
    catch(error){
        console.log(error)
    }
  })

module.exports = router;
