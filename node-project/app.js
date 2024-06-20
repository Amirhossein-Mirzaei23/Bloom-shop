const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const userModel = require('./models/Users')

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
mongoose.Promise = global.Promise

let amirUserInfo ={
 id:10,first_name:'amn',last_name:'ahmadi'
}
let amirUser = new userModel(amirUserInfo)

amirUser.save().then(()=>{
  console.log('new user created');
})


amirUserInfo.sa
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
