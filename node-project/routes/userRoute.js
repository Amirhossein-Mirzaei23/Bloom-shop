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

userRoutes.get('/',(req,res)=>{
    
    console.log('Users fetch');
    userModel.find({id:req.params.id}).then((user)=>{
        console.log('allUsers');
        res.json(user)
    })
})

// create a route to could update user data

userRoutes.put('/edit-user/:id',(req,res)=>{
    console.log('user router');
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
        role:req.body.role,
        password:req.body.password,
        address:req.body.address
    }

    let newUser = new userModel(userInfo)
  
    let response = {
        state:{
            err:0 ,
        }
      }
      newUser.save().then(()=>{
         console.log('new user created');
         response.state.msg = 'کاربر با موفقیت افزوده شد'
         res.json(response)
       }).catch((err)=>{
        let dataBaseresponse = err.message
        response.state.msg = dataBaseresponse
        response.state.err++
           res.json(response)
       })
})


module.exports = userRoutes