const mongoose = require('../libs/mongoose');
const Articles = mongoose.model('Articles', {
  title: String,
  price: String,
  thumbnail: String
});

module.exports = Articles;