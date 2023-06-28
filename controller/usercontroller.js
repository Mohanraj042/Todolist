const controller=require("../services/userservices")

const register= async (req,res)=>{
    try{
        const { email,password}=req.body;
        const user=await controller.userregister(email,password);
        res.json(user);
    }catch(err)
    {
        console.log(err);
    }
}
module.exports={
    register
}