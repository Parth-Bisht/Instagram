const express = require('express');

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
router.post("/",async function(req, res){
    try{
const user =await User.create(req.body);
return res.status(201).send(user);
    }catch(err){
        return res.status(500).send({err});
    }
})
module.exports = router