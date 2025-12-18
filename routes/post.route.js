const express = require("express")
const route = express.Router()

const{createPost,getAllPost} = require ("../controllers/post.controller")

const authentication = require("../middleware/authentication.middleware")

// we added the authentication middleware that comes before one creates a post and gets all posts
route.post("/post",authentication,createPost)
route.get("/post",authentication,getAllPost) // route specific midleware


module.exports = route;

