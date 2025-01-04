const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    address:{
        type:String,
        required:true
    },
    avtar:{
     type:String,
     default:"https://cdn-icons-png.flaticon.com/128/3177/3177440.png",

    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    favourates:[
       { type:mongoose.Types.ObjectId,
        ref:"books",},
    ],
    cart:[
        { type:mongoose.Types.ObjectId,
            ref:"books",},  
    ],
   orders: [
    { type:mongoose.Types.ObjectId,
        ref:"order",},
    ]
},{timestamps:true});

const customerModel=mongoose.model("userDB",userSchema);
module.exports={customerModel}