const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

router.get('/', (req, res) =>{
    res.send('HEY HEY HEY')
})

router.post('/signup', (req, res) =>{
    console.log(req.body.name)
})

module.exports = router