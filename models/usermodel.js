
const mongoose = require("mongoose");
const db = require ("../configs/db");
const bcrypt = require("bcrypt");


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },

    
});

userSchema.pre('save',async function(){
    var user = this;
    const salt = await(bcrypt.genSalt(10));
    const hashPass = await(bcrypt.hash(user.password,salt));

    user.password =hashPass;
})

const userModel = db.model("user", userSchema);

module.exports = userModel;
