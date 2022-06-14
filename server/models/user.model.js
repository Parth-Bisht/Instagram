const {Schema,model} =require("mongoose");
const userSchema = new Schema({
    name:{type: String,required: true},
    user_name:{type: String,required: true},
    profile_picture:{type: String,required: false,default:"https://instagram.fblq3-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?efg=eyJybWQiOiJpZ19hbmRyb2lkX21vYmlsZV9uZXR3b3JrX3N0YWNrX25vbl9zZWxlY3RpdmVfcmV0cnlfNDoxX25vbl9zZWxlY3RpdmVfcmV0cnkifQ&_nc_ad=z-m&_nc_ht=instagram.fblq3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Z7MQqCX3yHIAX9E4Qqu&edm=AEF8tYYBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT-VDqDzFla5nB8zHusOcgPdgQ3qKvqUHEDWGJ-Asz_N3Q&oe=62AF2F4F&_nc_sid=a9513d"},
    followers:[{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:false
    }],
    following:[{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:false
    }],
  
    bio:[{type:String,required:false}],
    location:{type:String,required:false},
   
},{
    versionKey:false,
    timeStamp:new Date()
})
module.exports =model("user",userSchema);









// save only ids in followers