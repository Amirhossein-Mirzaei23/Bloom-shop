const express = require('express')

const productsRouter = express.Router()

const productsModel = require('../models/Products')
console.log('use');
// api

productsRouter.get('/',(req,res)=>{
    
    console.log('productsRouter');
    productsModel.find({}).then((allProducts)=>{
        console.log('allproduct');
        res.json(allProducts)
    })
})


module.exports = productsRouter