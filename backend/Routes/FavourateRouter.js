const {Router}=require('express');
const router=Router();

const {UserMiddleware} =require('../middleware/Usermiddleware');
const {AddToFavrate,removeFromFavrate,getFavrateBook}=require('../Controller/FavourateController');


router.put('/book-add-to-fav',UserMiddleware,AddToFavrate);
router.put('/book-remove-from-fav',UserMiddleware,removeFromFavrate);
router.get('/get-fav-book',UserMiddleware,getFavrateBook)


module.exports=router;