const mongoose = require("mongoose")
const scmodel = require("./scmodel")

const schema = mongoose.Schema

const TodoModel = new schema({
    userId:{
        type: schema.Types.ObjectId,
        ref: "table"
    },
    title:{
        type:"string",
        required:true
    },
    desc:{
        type:"string",
        required:true
    }
})

const todomodel= mongoose.model("Todo",TodoModel)
module.exports= todomodel