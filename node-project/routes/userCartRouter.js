const express = require('express')
const fs = require('fs');
const userCartRouter = express.Router()

const shoppingCartModel = require('../models/shoppingCart');

console.log('calluser cart');

userCartRouter.post('/addToCart',(req,res)=> {
  let response = {
    state:{
        err:0 ,
    }}

    shoppingCartModel.findOne({userId:req.body.userId})
    .then(
        (data)=>{
          console.log(data);
   //       for (const cart of data) {
   //        if(cart.products){
   //         console.log(true);
   //        }
  
   //       }
    //   response.data = 'با موفقیت حذف شد'
    //   res.json(response)
      //    return
            if (!data) {

              console.log('userId:',req.body.userId,'products:',req.body.products);
                const cart = new shoppingCartModel({
                    userId: req.body.userId,
                    products: req.body.products,
                    name:req.body.name,
                    price:req.body.price
                  });
              
                   cart.save().then((dataBaseResponse)=>{
                    response.state.msg = 'سبد خرید جدید با موفقیت ایجاد شد'
                    res.json(response)
                   });
            }else{
                req.body.products.map((reqProduct)=>{
                 
                 const  existingProduct =  data.products.find(product => product.productId === reqProduct.productId);
                
                 if (existingProduct) {
                    existingProduct.quantity += reqProduct.quantity;
                 console.log( ' if existingProduct:',existingProduct);
                 response.state.msg = 'تعداد این محصول افزایش یافت'
                response.data =existingProduct
                
                    data.save().then(()=>{
                      response.state.msg = 'تعداد این کالا با موفقیت افزایش یافت'
                      res.json(response)
                    })
                  } else {
                   
                  
                    data.products.push({
                      productId: reqProduct.productId,
                      quantity: reqProduct.quantity,
                      name:reqProduct.name,
                      price:reqProduct.price
                      
                    });

                    data.save().then(()=>{
                      console.log('saved product');
                      response.state.msg = 'این کالا با موفقیت به سبد شما افزوده شد'
                      res.json(response)
                    })
                  }
                 
                })
                
                


            }
        }
    )



  })

  userCartRouter.post('/removeProductCart',(req,res)=> {
    let response = {
      state:{
          err:0 ,
      }}
  
      shoppingCartModel.findOne({userId:req.body.userId})
      .then(
          (data)=>{
            
     //       for (const cart of data) {
     //        if(cart.products){
     //         console.log(true);
     //        }
     //       }
     
        
                  req.body.products.map((reqProduct)=>{
                   
                   let  existingProduct =  data.products.find(product => product.productId === reqProduct.productId);
                  
                   if (existingProduct) {
                     if (existingProduct.quantity>1) {
                      existingProduct.quantity -= reqProduct.quantity;
                  
                      response.data =existingProduct
                      
                          data.save().then(()=>{
                            response.state.msg = 'تعداد این کالا با موفقیت کاهش یافت'
                            res.json(response)
                          })
                     } else {
                      data.products.find(product => product.productId === reqProduct.productId ).deleteOne()
                      data.save().then(()=>{
                        response.state.msg = ' این کالا با موفقیت  حذف شد'
                        res.json(response)
                      })
                     }
                    } else {
               
                        response.state.msg = 'این کالا با در سبد خرید شما یافت نشد'
                        res.json(response)

                    }
                   
                  })

              } ) })

  userCartRouter.post('/removeCart',(req,res)=> {
      let response = {
        state:{
            err:0 ,
        }}
    
        shoppingCartModel.findOneAndDelete({userId:req.body.userId})
        .then(
            ()=>{
              response.state.msg = 'سبد خرید حذف گردید'
              res.json(response)
      
           
            }
        ).catch((err)=>{
          response.state.err++
          response.state.msg = err
          res.json(response)
        })
    
      })

///   async function addProductToCart(cartId, productId, quantity) {
///     const cart = await Cart.findById(cartId);
///   
///     if (!cart) {
///       throw new Error('Cart not found');
///     }
///   
///     const existingProduct = cart.products.find(product => product.productId === productId);
///   
///     if (existingProduct) {
///       existingProduct.quantity += quantity;
///     } else {
///       cart.products.push({
///         productId: productId,
///         quantity: quantity
///       });
///     }
///   
///     await cart.save();
///   }
  


userCartRouter.post('/list',(req,res)=>{
  console.log('calluser cart list',req.body);
  let response = {
    state:{
        err:0 ,
    }}
  shoppingCartModel.findOne({userId:req.body.userId}).then(
    (data)=>{
      response.data = data
      response.state.msg = `سبد خرید کاربر ${req.body.userId}`
      res.json(response)
    }
    
  ).catch((err)=>{
    response.state.err++
    response.state.msg = err
    res.status(422)
    res.json(response)
  })
})



module.exports = userCartRouter