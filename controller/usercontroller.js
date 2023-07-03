const service=require("../services/userservices")
const bcrypt=require("bcrypt")

const register= async (req,res)=>{
    try{
        const { email,password}=req.body;
        const user=await service.userregister(email,password);
        res.json(user);
    }catch(err)
    {
        console.log(err);
    }
}

const login=async(req,res)=>{
    try{
        const{email,password}=req.body;

        //check user  in database
        const user= await service.checkuser(email)
        if(!user){
            throw new Error("user not found");
        }
        // compare password to user to db.password
        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch){
            throw new Error("password is miss match");
        }

        //token rised
        let Tdata={
            id:user._id,
            email:user.email
        }

        const token=await service.genaratetoken(Tdata,'Scode')
        res.status(200).json(
            {
                status:true,
                token:token
            }
        )



    }
    catch(err){
        console.log(err);
    }
}
module.exports={
    register,
    login
}