const mongoose=require('mongoose');
const orderSchema=new mongoose({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"userDB"
    },
   book: {
  type:mongoose.Types.ObjectId,
        ref:"books"
    },
    status:{
        type:String,
        default:"order placed",
        enum:["order placed","out of delivery, Delivered,Canceled"]
    },
},{timestamps:true});

const orderModel=mongoose.model("order",orderSchema);

module.exports={
    orderModel
}