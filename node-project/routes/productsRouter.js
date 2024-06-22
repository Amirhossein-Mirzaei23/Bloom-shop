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
// create a product in product model
productsRouter.post('/create',(req,res)=>{
    let productInfo = {
        id:req.body.id,
        title:req.body.title,
        type:req.body.type,
        typeId:req.body.typeId,
        price:req.body.price,
        description :req.body.description,
        image:'@/src/assets/image/products/image1.png',
        flowerPot:req.body.flowerPot
    }

    let newProduct = new productsModel(productInfo)
  
   newProduct.save().then(()=>{
     console.log('new product created');
   })
   let response = {
    state:{err:0,msg:'محصول با موفقیت افزوده شد'}
   }
   res.json(response)
})


productsRouter.get('/main',(req,res)=>{
    let userId = req.headers.authorization
    console.log('productsRouter');
    productsModel.findById(userId).then((singleProduct)=>{
        console.log('single product');
        res.json(singleProduct)
    })
})

module.exports = productsRouter