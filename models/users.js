const mongoose = require ('mongoose');

const userschema = new mongoose.Schema({
    firstName:{type: String , required: true , minlength: 5 },
    lastName:{type: String, required: true},
    email:{type: String , required: true,unique: true },
    password: String,
    posts: { type: Array, default: []}
})
const userModel = mongoose.model('User',userschema)

module.exports=userModel;