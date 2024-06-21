const mongoose = require('mongoose');

// create a mongoose schema
let productsSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        trim:true,
    },
    flowerPot:{
        type:Number,
        trim:true,
        lowerCase:true
    },
    type:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true
    },
    typeId:{
        type:Number,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
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
    image:{
        type:String
    },


    
})

let products = mongoose.model('products', productsSchema)

module.exports = products