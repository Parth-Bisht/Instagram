const express = require('express');
const app = express();
app.use(express.json());
const userController = require("./controllers/user.controller");
const postController = require("./controllers/post.controller");
app.use("/user",userController);
app.use("/post",postController);
module.exports = app;
