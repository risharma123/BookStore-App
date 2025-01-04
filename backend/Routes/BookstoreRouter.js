const {Router}=require('express');
const router=Router();

const {UserMiddleware} =require('../middleware/Usermiddleware');
const {addBook,bookInfoUpdate, getAllBook,getRecentBook,getparticularBook, bookInfoDelete}=require('../Controller/BookController');


router.post('/add-book',UserMiddleware,addBook);
router.put('/update-book',UserMiddleware,bookInfoUpdate);
router.get('/get-all-book',UserMiddleware,getAllBook);
router.get('/get-recent-book',UserMiddleware,getRecentBook);
router.get('/get-book/:bookid',UserMiddleware,getparticularBook);
router.delete('/delete-book',UserMiddleware,bookInfoDelete);





module.exports=router;