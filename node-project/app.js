const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes= require('./routes/userRoute')
const categoriesRouter= require('./routes/categoriesRouter')
const productsRouter= require('./routes/productsRouter')
// add models
const userModel = require('./models/Users')
const productsModel = require('./models/Products')
const categoryModel = require('./models/categories')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const session = require('express-session');

 const passport = require('./config/passport');
// const passport = null

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));

// Initialize Passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

// ... (your Express routes)


const mongoose = require('mongoose');


 app.use(cors())
 app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });
// 


mongoose.connect('mongodb://root:cRMBisVqmU381uCWrAQsdEp4@lhotse.liara.cloud:32971/my-app?authSource=admin')
  .then((res) => console.log('Connected!')).catch((err)=>{
    console.log(err);
    console.log('connecttion feild');
  });
mongoose.Promise = global.Promise





 app.use(bodyParser.json())

 app.use('/api/users',userRoutes)
 app.use('/api/categories',categoriesRouter)
 app.use('/api/products',productsRouter)

//  app.use(multer({ dest: `./uploads/`,
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));


 //create category
 let categoryInfo = {categoryId:1,title:'دسته گل',description :'یک گیاه گلدار ',icon:'@/src/assets/image/categories/image2.png'}

 let newCategory = new categoryModel(categoryInfo)

//  newCategory.save().then(()=>{
//   console.log('new Categoty created');
// })
 // create product 
  let productInfo = {id:2,type:'گیاهان آپارتمانی',typeId:2,price:58000,title:'سانسوریا',description :'یک گیاه گلدار ',image:'@/src/assets/image/products/image1.png',flowerPot:1}

  let newProduct = new productsModel(productInfo)

// newProduct.save().then(()=>{
//   console.log('new product created');
// })

 // create user

// let amirUserInfo ={
//  userId:20,first_name:'amir',last_name:'mirzaei',phoneNumber:09338262657,password:'amir1379'
// }
// 
// let amirUser = new userModel(amirUserInfo)

 // save created user

// amirUser.save().then(()=>{
//   console.log('new user created');
// })

 // find and delte

//userModel.findOneAndDelete( {id:10} ).then((res)=>{
//  console.log(res);
//})

//   find user 

// userModel.find( {id:11} ).then((res)=>{
//   console.log('user:',res);
// })
//   find user by id

//userModel.findById('6675095ce7e1dc2790574d5b').then((res)=>{
//  console.log('found user by id:',res);
//})


//  return all user

// userModel.find({}).then((res)=>{
//   console.log('found user by id:',res);
// })

// edit user data

// userModel.findOneAndUpdate({id:19},{id:19,first_name:'nazi',last_name:'rahmani'}).then((res)=>{console.log(res);})

// edit user data find by id
// userModel.findByIdAndUpdate('66750b62c2879919907053ab',{id:18,first_name:'amirHossein',last_name:'haji'}).then((res)=>{console.log(res);})





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// find by id end edit 
