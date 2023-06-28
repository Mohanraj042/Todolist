const con=require("../controller/usercontroller")
 const exp=require("express")
 const router=exp.Router()

 router.post("/register",con.register)

 module.exports=router;