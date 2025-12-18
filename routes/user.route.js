// ckeate USER ROUTE

const express =require("express")
const route = express.Router()


const {createuser, getAllUsers, singleUser,deleteUser,updateUser,loginUser} = require ("../controllers/users.controller")
//const authentication =require("../middleware/authentication.middleware")

// create the methods to endpoints
route.post("/users",createuser)
route.get("/users",getAllUsers)
route.get("/users/:id",singleUser)
route.delete("/users/:id",deleteUser)
route.put("/users/:id",updateUser)
route.post("/user",loginUser)

module.exports =route;
