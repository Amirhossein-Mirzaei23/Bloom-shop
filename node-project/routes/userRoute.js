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


module.exports = userRoutes