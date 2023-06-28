const model=require("../model/scmodel")
const jwt=require("jsonwebtoken")

class userservices{
    static async userregister(email,password){
        try{
            const user= await model.create({email,password})
            return user;
        }catch(err){
            console.log(err);
        }
    }
    static async checkuser(email){
        try{
            return await model.findOne({email})
        }
        catch(err){
            console.log(err);
        }
    }

    static async genaratetoken(Tdata,Scode){
        try{
            return await jwt.sign(Tdata,Scode,{expiresIn:"1h"})
        }
catch(err){
    console.log(err);
}
    }
}


module.exports=userservices;