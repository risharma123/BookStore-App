const jwt=require('jsonwebtoken')

const UserMiddleware=async (req,res,next)=>{
    try{
    const auth = req.headers['token'];
    if(!auth){
        res.status(400).json({
          message:"unauthorized, token is required "
        })
    }
    const userDecoded= await jwt.verify(auth,process.env.jwt_secret);
    req.user=userDecoded;
    next();
}catch(err){
    return res.status(403).json({
        message:"unauthrised,token is incorrect ",
        error:err.message
        
    })
 
}
}

module.exports={UserMiddleware}