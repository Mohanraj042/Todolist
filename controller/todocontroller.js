const todoservices = require("../services/todoservices")

const createTodo= async (req,res)=>{
    try{
        const{userId,title,desc}= req.body
        let createto= await todoservices.CreateTodo(userId,title,desc)
        res.json({
            status:true,
            success:createto
        }) 
    }
    catch (err) {
        console.log(err)
    }
}

const getTodo= async (req,res)=>{
    try{
        const{userId}= req.body
        let get= await todoservices.getTodo(userId)
        res.json({
            status:true,
            success:get
        }) 
    }
    catch (err) {
        console.log(err)
    }
}

const deleteTodo= async (req,res)=>{
    try{
        const{id}= req.body
        const deleteto = await todoservices.DeleteTodo(id)
        res.json({
            status:true,
            success:deleteto
        }) 
    }
    catch (err) {
        console.log(err)
    }
}

module.exports={createTodo, getTodo, deleteTodo}