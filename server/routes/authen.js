const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt= require("bcryptjs")

router.get('/', (req, res) =>{
    res.send('HEY HEY HEY')
})

router.post("/signup",(req,res)=>{
	const {name,email,password} = req.body
	if(!email || !password || !name){
			res.status(422).json({error:"You will need to give all the information"})
	}
	User.findOne({email:email}).then((savedUser=>{
			if(savedUser){
					return res.status(422).json({error:"User already exists with that email Id"})
			}

			bcrypt.hash(password,12).then(hashedpassword=>{
					const user = new User({
							email,
							password:hashedpassword,
							name
					})
					user.save()
					.then(user=>{
							res.json({message:"saved sucessfully"})
					}).catch(err=>{
							console.log(err);
					})
			})
			
	})).catch(err=>{
			console.log(err);
	})
	//res.json({message:"Your data is successfully sent"})
	//console.log(req.body.name);
})


module.exports = router