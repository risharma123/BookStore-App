 const {customerModel}=require('../models/UsersModel')
 const bcrypt  =require('bcrypt');
 const jwt=require('jsonwebtoken');


 const userSignup=async(req,res)=>{
    try{

        const {username,email,password,address}=req.body;

      
        if(!username || username.length<4){
            return res.status(400).json({
                message:"username length should be greater than 4"
            })
        }
     
        const usernameExist=await customerModel.findOne({username})
        
        if(usernameExist){
            console.log("hello2")
            return res.status(403).json({
                message:"username already exist",
               
            })
        }
        const emailExist=await customerModel.findOne({email})
       
        if(emailExist){
            console.log("hello4");
            return res.status(403).json({
                message:"email already exist",
               
            })
        }
       if(!password || password.length<5){
        return res.status(400).json({
            message:"password length should be greater than 5"
        })
       }
        const hashPassword=await bcrypt.hash(password,10);

        const userCreated= await customerModel.create(
            {username,
                email,
                password:hashPassword,
                address});

        
      
         res.status(201).json({message:"signup successfully completed",
            userCreated
         })

        }
        catch(err){
        res.status(500).json({
            message:"internal server down at signup ",
            error:err.message
            
        })
        }
 };

const userSignin=async(req,res)=>{
    try{
  const {username,password}=req.body;

  const errorMsg="auth credential failed and password is not correct";

  const loginUser=await customerModel.findOne({username});
  
  if(!loginUser){
    return res.status(403).json({
        message:errorMsg  
    })
  }

  const DBpassword=await bcrypt.compare(password,loginUser.password);
  if(!DBpassword){
    return res.status(403).json({
        message:errorMsg,
        success:false
    })
  }
const jwt_token=jwt.sign({email:loginUser.email},process.env.jwt_secret) ;

res.status(201).json({
    message:"login successfully completed",
    success:true,
    token:jwt_token,
    id:loginUser._id
    
})
}catch(err){
    res.status(500).json({
        message:"internal server down at login ",
        success:false,
        error:err.message
    })
    }
}

const userInformation=async(req,res)=>{
   try{
       const {id}=req.headers;
       const data=await customerModel.findById({_id:id}).select('-password');
       res.json({
        message:"Customer information ",
        data
       })
   }catch(err){
    res.status(500).json({
        message:"internal server error",
        error:err.message
    })
   }
}

const userInfoUpdate=async(req,res)=>{
    try{
        const {id}=req.headers;
        const {address}=req.body;
        const updateData=await customerModel.findByIdAndUpdate({_id:id},{address:address});
        res.json({
         message:" update Customer information ",
         updateData
        })
    }catch(err){
     res.status(500).json({
         message:"internal server error",
         error:err.message
     })
    }
 }
 




 module.exports={
    userSignin,
    userSignup,
    userInformation,
    userInfoUpdate
 }
