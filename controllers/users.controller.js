// logic

const userModel = require("../models/user.model")



// first endpoint POST


const createuser = async(req,res) => {
    const body = req.body; // we get body from frontend
   try {

const newUser = userModel(body) // create instance based on what is coming from the frontend
const savedUser = await newUser.save() //saved user
return res.json(savedUser);// return the saved user
    }
    catch(error) {
    return res.send("something is not okay");
    }
};


// create get all users endpoint GET

const getAllUsers = async(req,res) => {
    try {
        const allUsers= await userModel.find()
        return res.json(allUsers)
    } catch (error){
        return res.send("something is not okay");

    }

};

// single user 

 const singleUser = async (req,res) => {
    const {id} = req.params;

    try{
        const oneUser = await userModel.findById(id);
        return res.json(oneUser);
    } catch (error) {
        return res.send ("something went wrong")
    }
 };

//delete user

const deleteUser = async (req,res) => {
    const {id} = req.params;
    try{
        const deletedUser =await userModel.findById(id);
        return res.json(deletedUser)
    }
    catch(error) {
        return res.send("there is an issue with this code")
    }
};


// create update  user endpoint

const updateUser= async(req,res) => {
    const body =req.body
    const {id} =req.params;

    try{

        const updateduser = await userModel.findByIdAndUpdate(id,{...body},{new:true});
        return res.json(updateduser)
    }catch (error) {
        return res.send("something not okay")
    }
}



module.exports ={createuser,getAllUsers,singleUser,deleteUser,updateUser}