const userModel=require('../models/user.model')
const userServices=require('../services/user.service')
const {validationResult}=require('express-validator')

///create the logic  to create user

module.exports.RegisterUser=async(req,res,next)=>{
    const errors=validationResult(req)// if error is coming 
    if(!errors.isEmpty()){
        // error are comming
        return res.status(400).json({errors:errors.array()})
    }
    const{fullname,lastname,email,password}=req.body;

    const hashpassword=await userModel.hashpassword(password)

    const user =await userServices.createUser({
        firstname:fullname,
        lastname:
        email,
        password:hashpassword
    })
    // genterate token

    const token =user.genrateAuthToken();
    res.status(2001).json({token,user}); 
}