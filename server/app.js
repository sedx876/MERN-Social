const express = require('express')
const mongoose = require('mongoose')
const {MONGOURI} = require('./valuekeys.js')
const app = express()

const PORT = 5000

require('./models/user')
require('./models/post')

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

app.use(require('./routes/authen.js'))


app.listen(PORT, () => {
    console.log('Server is running at', PORT)
})

