const {Router}=require('express');
const router=Router();

const {UserMiddleware} =require('../middleware/Usermiddleware');
const {AddToCart,removeFromCart,getCartBook}=require('../Controller/CartController');


router.put('/book-add-to-fav',UserMiddleware,AddToCart);
router.put('/book-remove-from-fav/:bookid',UserMiddleware,removeFromCart);
router.get('/get-fav-book',UserMiddleware,getCartBook)


module.exports=router;