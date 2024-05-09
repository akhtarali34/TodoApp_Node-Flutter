
const userModel = require("../models/usermodel");
const jwt = require("jsonwebtoken");

class UserServices {
    static async registerUser(email, password) {
        try {
            console.log("-----Email --- Password-----", email, password);
            const createUser = new userModel({ email, password });
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }


    static async checkUser(email){
        try{
            return await userModel.findOne({email});

        }catch(error){
                 throw error;
        }
    };


    static async generateToken(TokenData , secretKey, jwt_expire){
          return jwt.sign(TokenData, secretKey, {expiresIn : jwt_expire})
    } 
}

module.exports = UserServices;
