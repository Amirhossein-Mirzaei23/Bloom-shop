const express = require('express')

const productsRouter = express.Router()
// const multer = require('multer');

const productsModel = require('../models/Products')
console.log('use');
// api

productsRouter.get('/all-products',(req,res)=>{
    console.log('productsRouter');
    productsModel.find({}).then((allProducts)=>{
        console.log('allproduct');
        res.json(allProducts)
    })
})

productsRouter.put('/edit-product/:id',(req,res)=>{
    console.log('productsRouter');
     productsModel.findOneAndUpdate(
        {id: req.params.id},
        {
        id:req.params.id,
        title:req.body.title,
        category:req.body.type,
        categoryId:req.body.typeId,
        salePrice:req.body.salePrice,
        offPrice:req.body.offPrice,
        dollerPrice:req.body.dollerPrice,
        immediateDelivery:req.body.immediateDelivery,
        image: req.body.icon?  `@/src/assets/image/products/+${req.body.icon}`:`@/src/assets/image/noImage.png` ,
        flowerPot:req.body.flowerPot
    }).then((res)=>{
        let response = {
            state:{err:0,msg:'محصول با موفقیت ویرایش شد'}
           }
           res.json(response)
    })

})

productsRouter.delete('/delte-product/:id',(req,res)=>{
    console.log('productsRouter');
    productsModel.findOneAndDelete( {id:req.params.id} ).then((allProducts)=>{
        let response = {
            state:{err:0,msg:'محصول با موفقیت حذف شد'}
           }
           res.json(response)
    
    })
})


// create a product in product model
productsRouter.post('/create',(req,res)=>{
    let productInfo = {
        id:req.body.id,
        title:req.body.title,
        category:req.body.type,
        categoryId:req.body.typeId,
        salePrice:req.body.salePrice,
        offPrice:req.body.offPrice,
        dollerPrice:req.body.dollerPrice,
        immediateDelivery:req.body.immediateDelivery,
        image: req.body.icon?  `@/src/assets/image/products/+${req.body.icon}`:`@/src/assets/image/noImage.png` ,
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