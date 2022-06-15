const express = require('express'); 
const router =express.Router();
const Reel =require('../models/reel.model');
router.get("/", async function(req, res){
    try{
const reels = await Reel.find().populate("user_id").lean().exec();
console.log(reels);
return res.status(201).send(reels);
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post("/", async function(req, res){
    try{
        const reel = await Reel.create(req.body);
        return res.status(201).send(reel);
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports = router;