const express = require('express');
const validator = require('validator')

const User =require('../models/user.model');
const router =express.Router();
router.get("/",async function(req, res){
    try{
        const users =await User.find().populate("followers").populate("following").lean().exec();
        console.log(users);
        return res.status(201).send(users);
    }catch(err){
        return res.status(500).send({err});
    }
});
router.get("/:id",async function(req, res){
    try{
        const users =await User.findById(req.params.id).populate("followers").populate("following").lean().exec();
        console.log(users);
        return res.status(201).send(users);
    }catch(err){
        return res.status(500).send({err});
    }
})

const signupAuthentication= async (req,res,next)=>{
    // console.log(req.body,"request")
    otpVerfication()
    const {email,password,user_name} = req.body

    try{
        const finduser = await User.find({user_name})
        if(finduser.length!=0){
            return res.status(200).send({message:`User with this user_name ${user_name} already exists.Please provide some different username`})
        }

    }catch(err){
        return res.status(500).send({message:err.message})
    }
   

 if(validator.isEmail(email) && validator.isStrongPassword(password)){
   next()
 }
 else if(!validator.isEmail(email)){
    return res.status(200).send({message:"Please provide a valid Email"})
 }
 else if(!validator.isStrongPassword(password))
    return res.status(200).send({message:"Please provide a Strong Password",data:{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1,}})
 }
    

const otpVerfication=()=>{

}





router.post('/',signupAuthentication)
router.post("/",async function(req, res){
    try{
const user =await User.create(req.body);
return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({err});
    }
})
module.exports = router