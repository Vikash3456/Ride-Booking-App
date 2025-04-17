const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const express=require('express')
const app= express() 
const cookieParser=require('cookie-parser') // one of the middleware that interact cookie in server
const connectToDb=require('./db/db')
const userRoutes=require('./router/user.router')
connectToDb();


app.use(cors());  
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.get('/',(req,res)=>{
     res.send('helllo......')
});

app.use('/user',userRoutes)

module.exports=app;