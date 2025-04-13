const express=require('express')
const router=express.Router();
const {body}=require('express-validator')
const userController=require('../controllers/user.controller'); 
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name msut be atleast 3 characarter'),
    body('password').isLength({min:3}).withMessage('password must be aleast 3 character'),
],
userController.RegisterUser

)
module.exports=router;