const mongoose = require('mongoose');

// create a mongoose schema
let userSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
        trim:true,
        
    },
    username:{
        type:String,
        require:true,
        trim:true
    },
   name:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true
    },
    phoneNumber:{
        type:Number,
        trim:true,
        
    },
    role:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLenth:8
    },
    address:{
        type:String,
        minLenth:2
    }
})

let users = mongoose.model('users', userSchema)

module.exports = users