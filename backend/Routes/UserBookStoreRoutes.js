
const {Router}=require('express');
const router=Router();

const {UserMiddleware} =require('../middleware/Usermiddleware');
const {userSignin,userSignup,userInformation,userInfoUpdate}=require('../Controller/UserController');

router.post('/signup',userSignup);
router.post('/signin',userSignin);
router.get('/get-Customer-info',UserMiddleware,userInformation);
router.put('/customer-update',UserMiddleware,userInfoUpdate);



module.exports=router;