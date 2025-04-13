const userModel=require('../models/user.model')


// this part simply create user
module.exports.createUser=async({firstname,lastname,email,password})=>{
     if(!firstname|| !email ||!password){
        throw new Error('All field are reqiured')
     }

     const user=userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
     })

     return user
    }