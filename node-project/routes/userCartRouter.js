const express = require('express')
const fs = require('fs');
const userCartRouter = express.Router()

const shoppingCartModel = require('../models/shoppingCart');


userCartRouter.post('createCart',(req,res)=> {
    shoppingCartModel.findById({userId:req.body.userId}).then(
        (data)=>{
            if (!data) {
                const cart = new shoppingCartModel({
                    userId: req.body.userId,
                    products: req.body.products
                  });
                
                   cart.save();
            }else{
                req.body.products.map((reqProduct)=>{
                 const  existingProduct =  data.products.find(product => product.productId === reqProduct.productId);
                 if (existingProduct) {
                    existingProduct.quantity += reqProduct.quantity;
                  } else {
                    data.products.push({
                      productId: reqProduct.productId,
                      quantity: reqProduct.quantity
                    });
                  
                  }
                  data.save()
                })
                
                


            }
        }
    )


    const cart = new shoppingCartModel({
      userId: req.body.userId,
      products: []
    });
  
     cart.save();
    return cart;
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
  


userCartRouter.get('/list',(req,res)=>{

})



module.exports = userCartRouter