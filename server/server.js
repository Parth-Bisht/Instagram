const app =require('./index');
const PORT =8080;
const connect = require("./configs/db")
app.listen(PORT, async (req, res) => {
    try{
        await connect();
        console.log("Connected to db");
    }catch(err){
        console.log(err);
    }
console.log("listening on port " + PORT);
})