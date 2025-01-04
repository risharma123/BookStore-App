const {bookModel}=require('../models/BookModel');
const {customerModel}=require('../models/UsersModel');

const addBook=async(req,res)=>{
    try{
    const {id}=req.headers;
    const {url,title,author,price,desc,lang}=req.body;
    const user=await customerModel.findById({_id:id});
    if(user.role!=="admin"){
        res.status(403).json({
            message:"this admin is not access the bookmodel"
        })
    }
    const createBook=await bookModel.create({url,title,author,price,desc,lang});
    res.status(201).json({message:"signup successfully completed",
        createBook
     })

    }
    catch(err){
    res.status(500).json({
        message:"internal server down at signup ",
        error:err.message
        
    })
    }
}

const bookInfoUpdate=async(req,res)=>{
    try{
        const {bookid}=req.headers;
        const {url,title,author,price,desc,lang}=req.body;
        const updateData=await bookModel.findByIdAndUpdate({_id:bookid},{url,title,author,price,desc,lang});
        res.json({
         message:" updated book information ",
         updateData
        })
    }catch(err){
     res.status(500).json({
         message:"internal server error",
         error:err.message
     })
    }
 }
 const getAllBook=async(req,res)=>{
    try{
        const data=await bookModel.find().sort({createdAt:-1});
        res.json({
         message:"book  information ",
         data
        })
    }catch(err){
     res.status(500).json({
         message:"internal server error",
         error:err.message
     })
    }
 }

 const getRecentBook=async(req,res)=>{
    try{
        const data=await bookModel.find().sort({createdAt:-1}).limit(4);
        res.json({
         message:"Recent book  information ",
         data
        })
    }catch(err){
     res.status(500).json({
         message:"internal server error",
         error:err.message
     })
    }
 }
 const getparticularBook=async(req,res)=>{
    try{
        const {bookid}=req.params;
        const data=await bookModel.findById({_id:bookid});
        res.json({
         message:" book  information ",
         data
        })
    }catch(err){
     res.status(500).json({
         message:"internal server error",
         error:err.message
     })
    }
 }
 
 const bookInfoDelete=async(req,res)=>{
    try{
        const {bookid}=req.headers;
        const updateData=await bookModel.findByIdAndDelete({_id:bookid});
        res.json({
         message:" deleted book information ",
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
addBook,
bookInfoUpdate,
getAllBook,
getRecentBook,
bookInfoDelete,
getparticularBook}