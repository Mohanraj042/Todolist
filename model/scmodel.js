const mongo=require("mongoose")
const bcrypt=require("bcrypt")

const Schema= mongo.Schema

const format= new Schema({
    email:{
        type:"string",
        required:true,
        unique:true,
          lowercase:true
    },
    password:{
        type:"string",
        required:true
    }
})


format.pre('save',async function()
{
const user=this;
const salt= await bcrypt.genSalt(10);
const hash=await bcrypt.hash(user.password,salt);
user.password=hash;
    
})

const usermodule=mongo.model("table",format)
 module.exports=usermodule;