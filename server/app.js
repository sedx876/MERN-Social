const express = require('express')
const mongoose = require('mongoose')
const {MONGOURI} = require('./valuekeys.js')
const app = express()

const PORT = 5000

mongoose.connect(MONGOURI, 
    {useNewUrlParser: true, 
     useUnifiedTopology: true}
)

mongoose.connection.on('connected', () => {
    console.log('We are connected')
})

mongoose.connection.on('error', () => {
    console.log('We are NOT connected')
})




app.listen(PORT, () => {
    console.log('Server is running at', PORT)
})

