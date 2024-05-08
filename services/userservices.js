
const userModel = require("../models/usermodel");

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
}

module.exports = UserServices;
