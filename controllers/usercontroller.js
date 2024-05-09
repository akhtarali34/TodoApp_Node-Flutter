const UserServices = require('../services/userservices')


exports.register = async(req, res,next)=>{
    try{
      const {email, password } = req.body;
      const sucessResponse =  await UserServices.registerUser(email, password);
      res.json({status:true , success:"user register succesfully"});
    }catch(error){
        throw error;
    }
}


exports.login = async(req, res,next)=>{
  try{
    const {email, password } = req.body;
     const user = await UserServices.checkUser(email);

     if(!user){
      throw new Error("User Des Not Exist");
     }
     const isMatch = await user.comparePassword(email);
     if(isMatch === false){
      throw new Error("password is incorrect");
     }

     let TokenData = {_id:user._id, email:user.email};
     const token = await UserServices.generateToken(TokenData, "seceretkey", "1h");
     res.status(200).json({status : true, token:token});
  }catch(error){
      throw error;
  }
}