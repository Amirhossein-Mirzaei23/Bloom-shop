const express = require('express')

const categoriesRouter = express.Router()

const categoryModel = require('../models/categories')
console.log('use cate');
// api

categoriesRouter.get('/',(req,res)=>{
    
    console.log('categoriesRouter');
    categoryModel.find({}).then((category)=>{
        console.log('allUsers');
        res.json(category)
    })
})

categoriesRouter.put('/edit-category/:id',(req,res)=>{
    console.log('productsRouter');
    categoryModel.findOneAndUpdate(
        {id: req.params.id},
        {
        categoryId:req.params.id,
        title:req.body.title,
        description :req.body.description,
        icon:`@/src/assets/image/categories/+${req.body.icon}`,
    }).then((res)=>{
        let response = {
            state:{err:0,msg:'دسته بندی با موفقیت ویرایش شد'}
           }
           res.json(response)
    })

})

categoriesRouter.delete('/delte-category/:id',(req,res)=>{
    console.log('productsRouter');
    categoryModel.findOneAndDelete( {id:req.params.id} ).then((category)=>{
        let response = {
            state:{err:0,msg:'دسته بندی با موفقیت حذف شد'}
           }
           res.json(response)
    console.log(category);
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
    state:{err:0,msg:'دسته بندی با موفقیت افزوده شد'}
   }
   res.json(response)
})


module.exports = categoriesRouter