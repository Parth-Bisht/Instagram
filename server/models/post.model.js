const {model,Schema} =require("mongoose");
const postSchema = new Schema({
    url:{type: String,required: true},
    caption:{type: String,required: false},
    user_id:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required: true
    }
},{
    versionKey:false,
    timeStamp:true
});
module.exports =model("post",postSchema);