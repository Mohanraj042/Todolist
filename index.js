const app=require("./app")
const mongo=require("mongoose")

const port=2000;

app.get("/",(req,res)=>{
    res.send("hello world")
})



app.listen(port,(req,res)=>{
    console.log("server is listening on ");
})

dburl = "mongodb+srv://mohanraj:mohan@cluster0.r5vbpt8.mongodb.net/todoregister?retryWrites=true&w=majority"

mongo.connect(dburl)
.then((result)=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err);
})

