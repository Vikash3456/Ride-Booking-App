const mongoose =require('mongoose')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
 const userSchema=new mongoose.Schema({
   fullname:{
    firstname:{
     type:String,
     require:true,  
     minLength:[3,'first name must  be aleast 3 character long'],
    }   
   },
   lastname:{
    type:String,
   
     minLength:[3,'last name must  be aleast 3 character long'],
   },
   email:{
    type:String,
     require:true,  
     unique:true,   
     minLength:[5,'email name must  be aleast 3 character long'],
   },
   password:{
    type:String,
     require:true,
    select:false,
    },
   
   socketId:{
    type:String,
   }

 })
 userSchema.methods.generateAuthToken=function(){
    const token =jwt.sign({_id:this._id},process.env.JWT_SECRET)
   return token 
}

userSchema.methods.comparePassword= async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.statics.hashpassword =async function (password) {
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('user',userSchema)

module.exports=userModel   
