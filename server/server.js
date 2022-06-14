const app =require('./index');
const PORT =8080;
const connect = require("./configs/db")
app.listen(PORT, async (req, res) => {
await connect();
console.log("listening on port " + PORT);
})