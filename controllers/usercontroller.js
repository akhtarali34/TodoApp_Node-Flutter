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