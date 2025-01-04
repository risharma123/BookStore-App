const {Router}=require('express');
const router=Router();

const {UserMiddleware} =require('../middleware/Usermiddleware');
const {placeOrder,getOrderHistory, getAllOrder, updateState}=require('../Controller/OrderController');


router.post('/place-order',UserMiddleware,placeOrder);
router.put('/update-book-state/:orderid',UserMiddleware,updateState);
router.get('/get-order-history',UserMiddleware,getOrderHistory);
router.get('/get-all-order',UserMiddleware,getAllOrder);


module.exports=router;