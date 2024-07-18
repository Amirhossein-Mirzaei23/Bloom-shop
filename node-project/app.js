const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
// define router variable
const userRoutes= require('./routes/userRoute')
const categoriesRouter= require('./routes/categoriesRouter')
const productsRouter= require('./routes/productsRouter')
const userCartRouter = require('./routes/userCartRouter')


const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const session = require('express-session');
const passport = require('./config/passport');
app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: false }));

// Initialize Passport and session middleware
app.use(passport.initialize());
app.use(passport.session());

// ... (your Express routes)


const mongoose = require('mongoose');

// add cors library
 app.use(cors())
 app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });
// 

// conetion to the database
mongoose.connect('mongodb://root:cRMBisVqmU381uCWrAQsdEp4@lhotse.liara.cloud:32971/my-app?authSource=admin')
  .then((res) => console.log('Connected!')).catch((err)=>{
    console.log(err);
    console.log('connecttion feild');
  });
mongoose.Promise = global.Promise





 app.use(bodyParser.json())

// add routers
 app.use('/api/users',userRoutes)
 app.use('/api/categories',categoriesRouter)
 app.use('/api/products',productsRouter)
app.use('/api/userCart',userCartRouter)
//  app.use(multer({ dest: `./uploads/`,
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));


// create server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// find by id end edit 
