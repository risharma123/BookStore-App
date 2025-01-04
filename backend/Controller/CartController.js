const {customerModel}=require('../models/UsersModel');


const AddToCart=async(req,res)=>{
    try{
        const {bookid,id}=req.headers;
        const userData=await customerModel.findById({_id:id})
        const isBookCart=userData.cart.includes(bookid);
        if(isBookCart){
            return res.status(200).json({
                message:"Book is already in Cart"
            })
        }
        await customerModel.findByIdAndUpdate({_id:id},{$push:{cart:bookid}});
        return res.status(200).json({message:"Book Added to Cart"});
    }catch(err){
        res.status(500).jason({
            message:"internal server error",
            error:err.message
        })
    }
}

const removeFromCart=async(req,res)=>{
    try{
        const {id}=req.headers;
        const {bookid}=req.params;
        const userData=await customerModel.findById({_id:id})
        const isBookCart=userData.cart.includes(bookid);
        if(isBookCart){
            await customerModel.findByIdAndUpdate({_id:id},{$pull:{cart:bookid}});
        }
      
        return res.status(200).json({message:"Book remove from cart"});
    }catch(err){
        res.status(500).jason({
            message:"internal server error",
            error:err.message
        })
    }
}

const getCartBook=async(req,res)=>{
    try{
    const {id}=req.headers;
    const userData=await customerModel.findById({_id:id}).populate('cart');
    const favouratebook=userData.cart;
    res.json({message:"Cart data",
        favouratebook
    })
    }catch(err){
        res.status(500).json({
            message:"internal server error",
            error:err.message
        })
    }
}

module.exports={
    AddToCart ,
    removeFromCart,
    getCartBook
}