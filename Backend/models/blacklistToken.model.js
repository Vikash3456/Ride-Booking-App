const mongoose=require('mongoose')
const userModel = require('./user.model')

const BlacklistTokenSchema=new mongoose.Schema({
    token:{
        type:String,
        require:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Data.now,
        expires:84600  // 24 hour in sec   and the particular doucment like BlacklistToken get expire/delete in 24 hour 
    }
})
module.exports=mongoose.model('BlacklistToken',BlacklistTokenSchema)