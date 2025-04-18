const express=require('express')
const router=express.Router();
const {body}=require('express-validator')
const captainController=require('../controllers/captain.controller'); 

router.post('/register',[
    body('email').isEmail().withMessage('Invaild email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be atlwast 3 character long'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('vichle must be at least 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('vechile plate must be at least 3 character long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('vechile capacity must be at least 1 character long'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invaild vehicel type'),
 ],
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    captainController.registerUser 
}
)




module.exports=router; 