const express=require('express')
const router=express.Router();
const {body}=require('express-validator')
const userController=require('../controllers/user.controller'); 

const authMiddleware= require('../middleware/auth.middleware')

//  [/register -->route]

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name msut be atleast 3 characarter'),
    body('password').isLength({min:3}).withMessage('password must be aleast 3 character'),
],
userController.RegisterUser
)


//[/login -->router ]

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:3}).withMessage('password must be aleast 3 character')
],
userController.loginUser

)


//[ /profile ---> router]
router.post('/profile',authMiddleware.authUser,userController.getUserProfile)
module.exports=router;