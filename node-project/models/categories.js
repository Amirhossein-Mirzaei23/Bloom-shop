const mongoose = require('mongoose');

// create a mongoose schema
let categoriesSchema = mongoose.Schema({
    categoryId:{
        type:Number,
        required:true,
        trim:true,
    },
    title:{
        type:String,
        required:true,
        trim:true,
        minLenth:2
    },
    description :{
        type:String,
        required:true,
        trim:true,
       
    },
    icon:{
        type:String,
        required:true
    }
})

let categories = mongoose.model('categories', categoriesSchema)

module.exports = categories