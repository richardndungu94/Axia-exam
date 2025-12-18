
/*
created post controller
createpost logic
get AllPost logic

Added jwt to authenticate before you can create apost
used req.user payload from authentication middleware
added status code

*/


const postModel=require("../models/post.model")
const jwt =require("jsonwebtoken")

const createPost =async(req,res,next) => {
    const userInfo=req.user; 

    const body =req.body

    

// I checked if the body contains a title or desc, if not we send an error
    if (!body.title || !body.desc) {
    const userError = new Error("all user input needed"); // provide error
    userError.status = 400; //pass the status code
    return next(userError); 
    
};


    try{
        const newPost = new postModel({...body,Creator:userInfo.userId})
        await newPost.save();
        return res.status(201).json({message:"post created"});

    }
    catch(error) {
        next(error)
    }

}

// GET all posts logic

const getAllPost = async(req,res,next) => {
    try {
        const allPosts = await postModel.find();
        return res.json(allPosts);

    } catch(error){
    next(error)
    }
}

module.exports = {createPost,getAllPost}



