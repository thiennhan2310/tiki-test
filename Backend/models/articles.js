const mongoose = require('../libs/mongoose');
const Articles = mongoose.model('Articles', {
  title: String,
  price: String,
  images: [String]
});

module.exports = Articles;