const express = require('express'); 
const router =express.Router();
const Post =require('../models/post.model');
router.get("/", async function(req, res){
    try{
const posts = await Post.find().populate("user_id").lean().exec();
console.log(posts);
return res.status(201).send(posts);
    }catch(err){
        return res.status(500).send(err.message)
    }
})
router.post("/", async function(req, res){
    try{
        const post = await Post.create(req.body);
        return res.status(201).send(post);
    }catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports = router;