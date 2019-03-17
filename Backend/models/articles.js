const mongoose = require('../libs/mongoose');
const Articles = mongoose.model('Articles', { 
  title: String ,
  content:String,
  thumbnail:String
});

module.exports = Articles;