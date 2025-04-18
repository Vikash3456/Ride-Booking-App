const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt =require('jsonwebtoken')

const captainSchema=new  mongoose.Schema({
    fullname:{
        firstname:{
                type:String,
                require:true,
                minlength:[3,'Fristname must be atleast 3 character long']
        },
        
        lastname:{
            type:String,
            minlength:[3,'Fristname must be atleast 3 character long']
    }
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        require:true,
        select:false,
    },
   //have two extra thing  
    socketId:{
        type:String
    },

    // captain avilable hai ki nahi ride lene ke liye
    status:{
     type:String,
     enum:['active','inactive'],
     default:['inactive']
    },
    vehicle:{
        color:{
            type:String,
            require:true,
            minlength:[3,'color must be aleast 3 charc long']
        },
        plate:{
            type:String,
            require:true,
            minlength:[3,'plate must be aleast 3 charc long']
        },

        capacity:{
            type:String,
            require:true,
            minlength:[1,'capacity must be aleast 1 charc long']
        },

        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']
        },

        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,
            }
        }

    }

})



captainSchema.methods.generateAuthToken =function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}


captainSchema.statics.hashPassword=async function (password){
    return await bcrypt.hash(password,10 );
}    

const captainModel=mongoose.model('captain',captainSchema)


module.exports=captainModel;