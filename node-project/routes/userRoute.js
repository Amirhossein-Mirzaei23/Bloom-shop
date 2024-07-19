const express = require('express')

const userRoutes = express.Router()
const userModel = require('../models/Users')

const passport = require('../config/passport');
const crypto = require("crypto");
//const passport = null

// api

userRoutes.get('/',(req,res)=>{
    
    console.log('Users fetch');
    userModel.find({}).then((allUsers)=>{
        console.log('allUsers');
        res.json(allUsers)
    })
})

userRoutes.post('/userData',(req,res)=>{
    let response = {
        state:{
            err:0 ,
        },
        data:null
      }
     

    if(!req.body.username){

        response.state.err++
        response.state.msg = 'پارامتر username یافت نشد'
        res.status(484)
        res.json(response)
        return
       
    }else{
       
        userModel.find({username:req.body.username}).then((user)=>{
            
            response.data = user
            res.json(response)
            return
        }).catch((err)=>{
            let dataBaseresponse = err.message
            response.state.err++
            response.state.msg = dataBaseresponse
            res.status(422)
            res.json(response)
            
        })
       
    }
   
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
    console.log('add user');
    let uuid = crypto.randomUUID();
    let userInfo = {
        userId:uuid,
        username:req.body.username,
        name:req.body.name,
        phoneNumber:req.body.phoneNumber,
        role:req.body.role || 'user',
        password:req.body.password,
        address:req.body.address
    }
    let response = {
        state:{
            err:0 ,
        }
      }
    let isUserExist = false
    userModel.find({phoneNumber:req.body.phoneNumber}).then((user)=>{
       
        if(user[0]){
          
            isUserExist = true
            if (isUserExist) {
                response.state.err++
                response.state.msg = 'این شماره همراه از قبل ثبت شده است '
                // status code fo dublicated new data
                res.status(409)
                res.json(response)
                return
            }
                }
                else{

                    
                    let newUser = new userModel(userInfo)
                  
                 
                      newUser.save().then(()=>{
                         console.log('new user created');
                         response.state.msg = 'کاربر با موفقیت افزوده شد'
                         res.json(response)
                       }).catch((err)=>{
                        console.log('no creaetd user');
                        let dataBaseresponse = err.message
                        response.state.msg = dataBaseresponse
                        response.state.err++
                        res.status(422)
                           res.json(response)
                       })
                }
    }).catch((err)=>{
        console.log("err",err);
    })


})


module.exports = userRoutes