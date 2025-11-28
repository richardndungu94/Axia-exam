// create user model
// create the document the db will get.

const mongoose =require ("mongoose");

// now create the schema

const userSchema = new mongoose.Schema({
    name : String,
    email: String,
    password :String,
    age :Number,
    married : Boolean

})

//now create  the model 

const model = mongoose.model("users",userSchema)

//export the model now

module.exports = model;