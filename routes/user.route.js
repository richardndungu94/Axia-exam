// ckeate USER ROUTE

const express =require("express")
const route = express.Router()
const {createuser, getAllUsers, singleUser,deleteUser,updateUser} = require ("../controllers/users.controller")


// create the methots to endpoints
route.post("/users",createuser)
route.get("/users",getAllUsers)
route.get("/users/:id",singleUser)
route.delete("/users/:id",deleteUser)
route.put("/users/:id",updateUser)

module.exports =route;
