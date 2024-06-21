const mongoose = require('mongoose');

// create a mongoose schema
let userSchema = mongoose.Schema({
    userId:{
        type:Number,
        required:true,
        trim:true,
        
    },
first_name:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true
    },
    last_name:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true
    },
    phoneNumber:{
        type:Number,
        trim:true,
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLenth:8
    }
})

let users = mongoose.model('users', userSchema)

module.exports = users