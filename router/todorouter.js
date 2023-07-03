const todocont = require("../controller/todocontroller")
const e = require("express")
const router= e.Router()

router.post("/addtodo",todocont.createTodo)
router.post("/gettodo",todocont.getTodo)
router.post("/deletetodo",todocont.deleteTodo)

module.exports=router