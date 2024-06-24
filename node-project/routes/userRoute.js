const express = require('express')

const userRoutes = express.Router()
const userModel = require('../models/Users')

// api

userRoutes.get('/',(req,res)=>{
    
    console.log('Users fetch');
    userModel.find({}).then((allUsers)=>{
        console.log('allUsers');
        res.json(allUsers)
    })
})




userRoutes.put('/edit-product/:id',(req,res)=>{
    console.log('productsRouter');
    userModel.findOneAndUpdate(
        {id: req.params.id},
        {
        userId:req.params.id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phoneNumber:req.body.phoneNumber,
        password:req.body.password,
        address:req.body.address
    }).then((res)=>{
        let response = {
            state:{err:0,msg:'کاربر با موفقیت ویرایش شد'}
           }
           res.json(response)
    })

})

userRoutes.delete('/delte-product/:id',(req,res)=>{
    console.log('productsRouter');
    userModel.findOneAndDelete( {id:req.params.id} ).then((user)=>{
        let response = {
            state:{err:0,msg:'کاربر با موفقیت حذف شد'}
           }
           res.json(response)
    
    })
})

// create a product in product model
userRoutes.post('/add',(req,res)=>{
    let userInfo = {
        userId:req.body.userId,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phoneNumber:req.body.phoneNumber,
        password:req.body.password,
        address:req.body.address
    }

    let newUser = new userModel(userInfo)
  
   newUser.save().then(()=>{
     console.log('new product created');
   })
   let response = {
    state:{err:0,msg:'محصول با موفقیت افزوده شد'}
   }
   res.json(response)
})


module.exports = userRoutes