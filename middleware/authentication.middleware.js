/* 
The authentication middleware
we call the jwt 

*/



const jwt = require("jsonwebtoken")

const authentication = (req,res,next) => {
    const token =req.cookies.token // we get token from cookies
    if (!token) { // we test if the token exist
    
        return res.status(401).json({message:"not authenticated"})

    }
    //then we verify token using a secret stored in dotenv

    jwt.verify(token,process.env.JWT_SECRET,(error,payload) => { //used call back function
        if (error) {
            console.log(error)
            return res.status(401).json({message:"session expired"})

        }
        req.user =payload;
    
    next() 
    });


}



module.exports=authentication;
