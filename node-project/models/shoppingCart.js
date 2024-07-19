const mongoose = require('mongoose');


const shoppingCartSchema = new mongoose.Schema({
  userId: {
    type: String,
   
    required: true
  },
  products: [{
    productId: {
      type:Number,
   //   type: mongoose.Schema.Types.ObjectId,
   //   ref: 'Product',
      required: true
    },
    name:{
      type:String,
      required: true
    },
    price:{
      type:Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }]
});

const shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema);

module.exports = shoppingCart;
