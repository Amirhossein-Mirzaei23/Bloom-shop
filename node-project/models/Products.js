const mongoose = require('mongoose');

// create a mongoose schema
let productsSchema = mongoose.Schema({
    id:{
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
 
    category:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true
    },
    categoryId:{
        type:Number,
        required:true,
        trim:true,
    },
    salePrice:{
        type:Number,
        required:true,
        trim:true,
    },
    offPrice :{
        type:Number,
        trim:true,
       
    },
    dollerPrice :{
        type:Number,
        required:false,
        trim:true, 
    },
  
    description :{
        type:String,
        required:true,
        trim:true,
    },
    immediateDelivery:{
        type:Boolean,
    },
    flowerPot:{
        type:Number,
        trim:true,
        lowerCase:true
    },
    image:{
        type:String
    },


    
})

let products = mongoose.model('products', productsSchema)

module.exports = products