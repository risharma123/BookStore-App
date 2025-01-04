
const {customerModel}=require('../models/UsersModel');


const AddToFavrate=async(req,res)=>{
    try{
        const {bookid,id}=req.headers;
        const userData=await customerModel.findById({_id:id})
        const isBookFavrate=userData.favourites.includes(bookid);
        if(isBookFavrate){
            return res.status(200).json({
                message:"Book is already in favourate"
            })
        }
        await customerModel.findByIdAndUpdate({_id:id},{$push:{favourites:bookid}});
        return res.status(200).json({message:"Book Added to favourates"});
    }catch(err){
        res.status(500).jason({
            message:"internal server error",
            error:err.message
        })
    }
}

const removeFromFavrate=async(req,res)=>{
    try{
        const {bookid,id}=req.headers;
        const userData=await customerModel.findById({_id:id})
        const isBookFavrate=userData.favourites.includes(bookid);
        if(isBookFavrate){
            await customerModel.findByIdAndUpdate({_id:id},{$pull:{favourites:bookid}});
        }
      
        return res.status(200).json({message:"Book remove from favourates"});
    }catch(err){
        res.status(500).jason({
            message:"internal server error",
            error:err.message
        })
    }
}

const getFavrateBook=async(req,res)=>{
    try{
    const {id}=req.headers;
    const userData=await customerModel.findById({_id:id}).populate('favourates');
    const favouratebook=userData.favourates;
    res.json({message:"favourate data",
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
    AddToFavrate ,
    removeFromFavrate,
    getFavrateBook
}