const model=require("../model/scmodel")

class userservices{
    static async userregister(email,password){
        try{
            const user= await model.create({email,password})
            return user;
        }catch(err){
            console.log(err);
        }
    }
}


module.exports=userservices;