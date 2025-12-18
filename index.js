// my exam


/*objective: 

Create user model be able to:
1. create user
2. get all users
3. delete a user
4. update a user

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