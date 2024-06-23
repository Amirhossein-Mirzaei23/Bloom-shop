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

// create a new category in category model
categoriesRouter.post('/create',(req,res)=>{
    let categoryInfo = {
        categoryId:req.body.categoryId,
        title:req.body.title,
        description :req.body.description,
        icon:`@/src/assets/image/categories/+${req.body.icon}`,
    }

    let newCategory = new categoryModel(categoryInfo)
  
    newCategory.save().then(()=>{
     console.log('new product created');
   })
   let response = {
    state:{err:0,msg:'محصول با موفقیت افزوده شد'}
   }
   res.json(response)
})


module.exports = categoriesRouter