const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt= require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../valuekeys')
const requireLogin = require("../middleware/requireLogin")

router.get("/",(req,res)=>{
    res.send("Hello World")
})
router.post("/signup",(req,res)=>{
    const {name,email,password} = req.body
    if(!email || !password || !name){
        res.status(422).json({error:"Please Fill Out All Fields"})
    }
    User.findOne({email:email}).then((savedUser=>{
        if(savedUser){
            return res.status(422).json({error:"User with That Email Already Exists"})
        }

        bcrypt.hash(password,12).then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                name
            })
            user.save()
            .then(user=>{
                res.json({message:"Saved Sucessfully, Please Review Terms of Service"})
            }).catch(err=>{
                console.log(err)
            })
        })
        
    })).catch(err=>{
        console.log(err)
    })
})

router.get("/protected",requireLogin,(req,res)=>{
    res.send("hello user")
})

router.post("/signin",(req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(422).json({error:"Please Provide Email and/or Password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Email or Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
               const token = jwt.sign({id:savedUser.id},JWT_SECRET)
               res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid Email or Password"}) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})



module.exports = router