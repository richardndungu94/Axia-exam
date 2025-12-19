// my exam


/*objective: 

Create user model be able to:
1. create user
2. get all users
3. delete a user
4. update a user

UPdated the code
1. created login endpoint
2. created a token and set cookies for the client
3. created authentication middleware to verify he token
4. created error handling middleware 
5 Added a post controller and post model
6. Added authentication to the routes

*/



console.log("Title: Richard Ndung'u Exam.")


// create express application
const express = require("express");
const mongoose =require("mongoose")
const app = express()
const cookieParser= require("cookie-parser")
const dotenv =require ("dotenv")
dotenv.config()



app.use(express.json())
app.use(cookieParser())


//create route
const userRoute = require ("./routes/user.route")
const postRoute= require("./routes/post.route")



app.use(userRoute);
app.use(postRoute)

// error handling middleware

app.use((error,req,res,next) => {
    return res.status(error.status || 501).json({message:error.message || "server error"})

})


// create maongoose to links and connection

mongoose 
. connect(process.env.DB_URL)
. then (() => console.log("DB connectd succesfully"))
. catch ((error)=> console.log("check error"));




// create port

app.listen(4000,() => {
    console.log("Your application is now running")
})













/* ######################################


my notes to master critical tasks:

npm init -y
npm install express mongoose
run npm to install these modules
bcrypt
jsonwebtoken
cookie-parser
dotenv

jwt
craete different folder for authentication mddlware
add authentication to routes
import jwt in routes folder,controller and middleware
req.user=payload appends the object with the payload so that you are able to call it in controller
verify the token

Error handling:
remember to add (error,req,res,next)
always call the next() function or the code will break
use next() function in  of consle.log in catch(error)

dotenv
here is where you hide your secret
do not push it to github


Authenticatin vs Autherization
authentication just identifies a user 
authorization limits the user on what they can do 






*/