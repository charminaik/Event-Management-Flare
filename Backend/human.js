const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : String,
    email: String,
    phn:String,
    password: String,
    cpassword:String
})

const User = mongoose.model("sign", UserSchema);
module.exports = User