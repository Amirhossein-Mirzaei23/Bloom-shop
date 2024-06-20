const mongoose = require('mongoose');

// create a mongoose schema
let userSchema = mongoose.Schema({
    id:{
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
})

let users = mongoose.model('user', userSchema)

module.exports = users