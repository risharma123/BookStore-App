const {bookModel}=require('../models/BookModel');
const { orderModel } = require('../models/OrderModel');
const {customerModel}=require('../models/UsersModel');

const placeOrder=async(req,res)=>{
    try{
    const {id}=req.headers;
    const {order}=req.body;

    for(const orderData of order){
        
        const newOrder=new orderModel({user:id,book:orderData._id});
        const orderDataFromDB=await newOrder.save();

        //saving order in userMOdel
        await customerModel.findByIdAndUpdate(id,{$push:{orders:orderDataFromDB._id},
        });

        //clearing cart
        await customerModel.findByIdAndUpdate(id,{$pull:{cart:orderData._id},
        });
    }
    return res.json({
        status:"success",
        message:"Order Placed Successfully",
    });
}catch(err){
return  res.status(500).json({message:"An error occured",error:err.message});
}
}
 const getOrderHistory=async(req,res)=>{
 try{
    const {id}=req.headers;
    const userData=await customerModel.findById({_id:id}).populate({
        path:"orders"}).populate({path:"book"})
    const ordersData=userData.orders.reverse();
    return res.json({
        status :"success",
        data:ordersData
    });
 }catch(err){
    return  res.status(500).json({message:"An error occured",error:err.message});
 }
 }

 const getAllOrder=async(req,res)=>{
    try{
       const OrderData=await customerModel.findById().populate({
           path:"user"})
           populate({path:"book"}).sort({createAt:-1})
       return res.json({
           status :"success",
           data:OrderData
       });
    }catch(err){
       return  res.status(500).json({message:"An error occured",error:err.message});
    }
    }

const updateState=async(req,res)=>{
    try{
const {orderid}=req.params;
   await orderModel.findByIdAndUpdate({_id:orderid},{status:req.body.status});
   return res.json({
    status :"success",
   message:"status updated successfully"
});
    }catch(err){
        return  res.status(500).json({message:"An error occured",error:err.message});
    }
}
module.exports={
    placeOrder,
    getOrderHistory,
    updateState,
    getAllOrder
}