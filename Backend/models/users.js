const mongoose = require('../libs/mongoose');
const bcrypt = require('bcrypt');
const User = mongoose.model('User', { 
  email: {type:String,unique:true} ,
  password:String,
  token:String
});
const hash = bcrypt.hashSync("123456789", 8);

const user = new User({ email: 'admin@yopmail.com',password:hash}); //123456789
user.save().then(() => console.log('Add default account')).catch(err=>{
  console.log('Add default account')
});

module.exports = User;