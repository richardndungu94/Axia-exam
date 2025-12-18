// logic

const userModel = require("../models/user.model")
const bcrypt =require("bcrypt")
const jwt =require("jsonwebtoken")



// first endpoint POST

/*
 we hashed a password here

 we picked the password from the request body and spread the others
 confirm if user exist by checking if the email exist
 then hash the password
 salt the hash with a salt of 10
 */


const createuser = async(req,res,next) => {
    const {password, ...others} =req.body

    const isUser = await userModel.findOne({email:others.email})

    if (isUser) {
        return res.status(400).json({message:"user exist"})
    }
   
    const hashedPassword=bcrypt.hashSync(password,10)
   
   

    /*
    create the new user by spreading others in the object and saving the passowrd to hashed pasword to avoid it being plain
    save the user
    return success on creation

    */
    try {

const newUser = userModel({...others,password:hashedPassword}) 
const savedUser = await newUser.save() //saved user
return res.json("success");// return the saved user
    }
    catch(error) {
    next(error);
    }
};


/*
Added login logic
we get email and password from the body
we check if the email exists,ifuser does not exist we output user does not exist message
then we compare the password with the hashed password
check if its a corect password or not


*/


//create log in endpoint
const loginUser=async(req,res,next) => {
    const {email, password} =req.body;
    const isUser=await userModel.findOne({email})
    if(!isUser) {
        return res.json({message:"user does not eist"})
    }
    const isPassword = bcrypt.compareSync(password,isUser.password)
    
    if (!isPassword) {
        console.log(isPassword)
        return res.json({message:"wrong password"})
    }



    // we now create a token,
    // create payload store the infomation like user id and role
    //create the token and sign it with the jwt secret
    //then we return the token nad user
    try {
        const payload ={userId:isUser.id,role:isUser.role,name:isUser.name,email:isUser.email}
        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:60*60})
        res.cookie("token",token)
        return res.json(isUser)
    }catch(error) {
        next(error) //we call next function that contains the error middleware

    }
}




// create get all users endpoint GET

const getAllUsers = async(req,res,next) => {
    try {
        const allUsers= await userModel.find()
        return res.json(allUsers)
    } catch (error){
        next(error)

    }

};



// single user 

 const singleUser = async (req,res,next) => {
    const {id} = req.params;

    try{
        const oneUser = await userModel.findById(id);
        return res.json(oneUser);
    } catch (error) {
        next(error)
    }
 };





//delete user

const deleteUser = async (req,res,next) => {
    const {id} = req.params;
    try{
        const deletedUser =await userModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.json({message:"user deleted"})
    }
    catch(error) {
        next(error)
    }
};





// create update  user endpoint

const updateUser= async(req,res,next) => {
    const body =req.body
    const {id} =req.params;

    try{

        const updateduser = await userModel.findByIdAndUpdate(id,{...body},{new:true});
        return res.json(updateduser)
    }catch (error) {
        next(error)
    }
}



module.exports ={createuser,getAllUsers,singleUser,deleteUser,updateUser,loginUser}