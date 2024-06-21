const express = require('express')

const categoriesRouter = express.Router()

const categoryModel = require('../models/categories')
console.log('use cate');
// api

categoriesRouter.get('/',(req,res)=>{
    
    console.log('categoriesRouter');
    categoryModel.find({}).then((allCategory)=>{
        console.log('allUsers');
        res.json(allCategory)
    })
})


module.exports = categoriesRouter