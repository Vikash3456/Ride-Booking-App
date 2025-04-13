const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const express=require('express')
const app= express() 
const connectToDb=require('./db/db')
const userRoutes=require('./router/user.router')
connectToDb();


app.use(cors());  
app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req,res)=>{
     res.send('helllo......')
});

app.use('/user',userRoutes)

module.exports=app;