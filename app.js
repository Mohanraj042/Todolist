const exp=require("express")

const rou=require("./router/userrouter")
const bodyparser=require("body-parser")


const app=exp()

app.use(bodyparser.json())
app.use(rou)

module.exports=app;