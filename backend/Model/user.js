const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
        firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    

    email :{
        type:String,
        required:true,
        unique:true
    },
    password :{
        type:String,
        required:true,
        minlength:8
    }
    
},{timestamps:true});
const user = mongoose.model('user',userSchema)
//code of export
module.exports = user;