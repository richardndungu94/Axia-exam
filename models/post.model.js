/*
post schema
 
we create post schema model

*/

                                       // call mongoose
const mongoose = require ("mongoose")
                                        // create postSchema
const postSchema = new mongoose.Schema(
    {
    title:{
        type:String

    },
    desc: {
        type:String
    },
    Creator: {
    type:String,
    required:true
    },

    },

     { timestamps:true}

);


                                    // create model
const model = mongoose.model("post",postSchema)

                  // export the model
module.exports=model;