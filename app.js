const exp=require("express")
const bodyparser=require("body-parser")

const userrou=require("./router/userrouter")
const todorou =require("./router/todorouter")




const app=exp()

app.use(bodyparser.json())
app.use(userrou)
app.use(todorou)


module.exports=app