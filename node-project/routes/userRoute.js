const express = require('express')

const userRoutes = express.Router()
const userModel = require('../models/Users')
const passport = require('../config/passport');
//const passport = null
// api

userRoutes.get('/',(req,res)=>{
    
    console.log('Users fetch');
    userModel.find({}).then((allUsers)=>{
        console.log('allUsers');
        res.json(allUsers)
    })
})

userRoutes.get('/userData',(req,res)=>{
    
    console.log('Users fetch');
    userModel.find({id:req.body.id}).then((user)=>{
        console.log('allUsers');
        res.json(user)
    })
})

// create a route to could update user data

userRoutes.put('/edit-user/:id',(req,res)=>{
    console.log('user router');
    let response = {
        state:{
            err:0 ,
        }
      }

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
/// userRoutes.post('/login', passport.authenticate('local', {
///     successRedirect: '/', // Redirect to protected area on success
///     failureRedirect: '/auth/login' // Redirect on failure
///   }));
userRoutes.post('/auth-login',(req,res)=>{
    let response = {
        state:{
            err:0 ,
        }
      }
    userModel.find({phoneNumber:req.body.phoneNumber}).then((user)=>{
        console.log('auth user');
      
       
       if (user[0]) {
       if (user[0].password == req.body.password) {
       console.log(user[0].password, req.body.password);
       res.status(200)
       response.data = user
        response.state.msg ='ورود با موفقیت انجام شد'
        res.json(response)
        return
       } else {

        res.status(401)
        response.state.msg ='رمز عبور معتبر نمیباشد'
        response.state.err = response.state.err + 1
        res.json(response)
        return
       }

       } else {
        res.status(422)
        response.state.msg = 'نام کاربری یافت نشد'
        response.state.err = response.state.err + 1
        res.json(response)
        return
       }

      
       console.log(response);
     
        

      }).catch((err)=>{
       let dataBaseresponse = err.message
       response.state.msg = dataBaseresponse
       response.state.err++
          res.json(response)
      })
})

// create a product in product model
userRoutes.post('/add',(req,res)=>{
    let userInfo = {
        userId:req.body.userId,
        username:req.body.username,
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