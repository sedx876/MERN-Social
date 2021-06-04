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
router.post('/signup',(req,res)=>{
    const {name,email,password,pic} = req.body
    if(!email || !password || !name){
        res.status(422).json({error:"you need to fill all info"})
    }
    User.findOne({email:email}).then((savedUser)=>
    {
        if(savedUser)
        {
            res.status(422).json({error:"Email Already Exist"})
        }
        bcrypt.hash(password,12).then(hashedpassword=>{
            
        const user = new User({
            email,
            password:hashedpassword,
            name,
            pic
        })
        user.save()
        .then(user=>{
            res.json({message:"saved successfully"})
        }).catch(err=>{
            console.log(err);
        })
    })
    }).catch(err=>{
        console.log(err);
    })
    //res.json({message:"Your data is sent"})
})

router.get("/protected",requireLogin,(req,res)=>{
    res.send("hello user")
})

router.post("/login",(req,res)=>{
    const {email,password} = req.body
    if(!email||!password){
        return res.status(422).json({error:"Please Check ur Email and Password"})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:"Invalid email and Password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"Successfully Signed In"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email,followers,following,pic}=savedUser
                res.json({token,user:{_id,name,email,followers,following,pic}})
            }
            else{
                return res.status(422).json({error:"Please Check ur Email and Password"})
            }
        }).catch(err=>{
            console.log(err);
        })
    })
})



module.exports = router