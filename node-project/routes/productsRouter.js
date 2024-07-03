const express = require('express')
const fs = require('fs');
const productsRouter = express.Router()
// const multer = require('multer');

const productsModel = require('../models/Products')
console.log('use');
// api

productsRouter.post('/',(req,res)=>{
    console.log('body:',req.body.categoryId);
    productsModel.find(req.body.categoryId?{categoryId:req.body.categoryId} : {}).then((allProducts)=>{
        console.log('allproduct');
        res.json(allProducts)
    })
})

productsRouter.get('/:id',(req,res)=>{
    console.log('productsRouter');
    productsModel.find({id:req.params.id}).then((allProducts)=>{
        console.log('allproduct');
        res.json(allProducts)
    })
})

// create a route to could update product
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
      //  image,data : fs.readFileSync(req.files.userPhoto.path),
      //  image,contentType : 'image/png',
        flowerPot:req.body.flowerPot
    }).then((res)=>{
        let response = {
            state:{err:0,msg:'محصول با موفقیت ویرایش شد'}
           }
           res.json(response)
    })

})
// create a route to delete product from model 
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




try {
    let productInfo = {
        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        category:req.body.type,
        categoryId:req.body.typeId,
        salePrice:req.body.salePrice,
        offPrice:req.body.offPrice,
        dollerPrice:req.body.dollerPrice,
        immediateDelivery:req.body.immediateDelivery,
        image: req.body.icon?  `@/src/assets/image/products/+${req.body.icon}`:`@/src/assets/image/noImage.png` ,
            //  image,data : fs.readFileSync(req.files.userPhoto.path),
      //  image,contentType : 'image/png',
        flowerPot:req.body.flowerPot
    }

    let newProduct = new productsModel(productInfo)
  let response = {
    state:{
        err:0 ,
    }
  }
   newProduct.save().then(()=>{
     console.log('new product created');
     response.state.msg = 'محصول با موفقیت افزوده شد'
     res.json(response)
   }).catch((err)=>{
    let dataBaseresponse = err.message
    response.state.msg = dataBaseresponse
    response.state.err++
       res.json(response)
   })

} catch (error) {
    let response = {
        state:{err:0,msg:'خطا'}
       }
       res.json(response)
    res.send(error)
}
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