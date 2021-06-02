const express = require("express");
const app = express()
const mongoose = require("mongoose");
const PORT = 5000
const {MONGOURI} = require("./valuekeys.js")

//dDXxLk5YEuyH2UFB - database access password


mongoose.connect(MONGOURI,{
    useNewUrlParser: true ,
    useUnifiedTopology: true
});
mongoose.connection.on('connected',()=>{
    console.log("We are connected to the server i.e Mongo DB");
})
mongoose.connection.on('error',()=>{
    console.log("We are not connected to the server i.e Mongo DB");
})

require("./models/user")
require("./models/post")
app.use(express.json())
app.use(require('./routes/authen.js'))
app.use(require('./routes/post.js'))

app.listen(PORT,()=>{
    console.log("Server is running at ",PORT)
})

