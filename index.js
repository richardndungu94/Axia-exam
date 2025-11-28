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
const app = express()
app.use(express.json())



//create route
const userRoute = require ("./routes/user.route");
app.use(userRoute);



//create mongoose 
const mongoose =require('mongoose')


// create maongoose to links and connection

mongoose 
. connect("mongodb://localhost:27017/Axia-exam")
. then (() => console.log("DB connectd succesfully"))
. catch ((error)=> console.log("check error"));




// create port

app.listen(4000,() => {
    console.log("Your application is now running")
})