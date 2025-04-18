const userModel=require('../models/user.model')
const bcrypt=require('bcrypt');
const { cookie } = require('express-validator');
const jwt =require('jsonwebtoken'); 


//check at middle that person is authorize or not 
// and also check  ki token hai ki nahi..

module.exports.authUser=async (req ,res ,next)=>{
    const token =req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];    //middle ware check token hai ki nahi 
   
    if(!token){//agar token exist nahi krta
        return res.status(401).json({message: 'unauthorized aaaaaa'})
    }
    

    //check karege ki log out karene ke baad bhi token hai ki nahi
    const isBlackelisted= await userModel.findOne({token:token})

    if(isBlackelisted){
        return res.status(401).json({message:'unauthorized'})
    }

    try{// decode bycrpt
        const decode =jwt.verify(token,process.env.JWT_SECRET)
        const user =await userModel.findById(decode._id)
        req.user=user;
        
        return next()
    }catch{
        return res.status(401).json({message: 'unauthorized'})
    }

}