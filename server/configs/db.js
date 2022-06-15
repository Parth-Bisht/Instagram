const mongoose = require('mongoose');
module.exports =()=>{
    return mongoose.connect("mongodb+srv://anmol:parth0bisht@instaclone.fkghi.mongodb.net/insta?retryWrites=true&w=majority")
}