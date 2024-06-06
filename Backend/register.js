const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    username : String,
    email: String,
    phn:String,
    eventname: String,
    fee:String
})

const Register = mongoose.model("register", registerSchema);
module.exports = Register