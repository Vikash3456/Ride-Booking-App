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
    res.status(2001).json({token,user});  //only two things are go from back to front 
}

module.exports.loginUser=async (req,res,next)=>{
    const error= validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    
    const {emai,password}=req.body

    const user= await userModel.findOne({email}).select('+password');
    
    if(!user){
        return res.status(400).json({message:'Invaild email or password '})
    }

    const isMatch =await user.comparePassword(password);
 if(!isMatch){
    return res.status(401).json({message:'Invaild email or password '})
 }

 const token =user.genrateAuthToken(token,user)

 res.status(200).json({token,user});

}

module.exports.getUserProfile= async( req,res,next)=>{
    //profile only see to user loged in that why use middle ware
    return res.status(200).json(req.user);
}