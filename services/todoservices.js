const todomodel = require("../model/todomodel")

class todoservices{
    static async CreateTodo(userId, title, desc){
        try{
            let create = await todomodel.create({userId, title, desc})
            return create
        }
        catch (err) {
            console.log(err)
        }
    }

    static async getTodo(userId){
        try{
            let gettodo = await todomodel.find({userId})
            return gettodo
        }
        catch (err) {
            console.log(err)
        }
    }

    static async DeleteTodo(id){
        try{
            let deletetodo = await todomodel.findOneAndDelete({_id : id})
            return deletetodo
        }
        catch (err) {
            console.log(err)
        }
    }
}

module.exports= todoservices
