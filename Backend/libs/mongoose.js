const mongoose = require('mongoose');
const uri = process.env.MONGO_URI || 'mongodb://tiki:GFczZt27tXsmWtD@ds147965.mlab.com:47965/tiki';
mongoose.connect(uri, { useNewUrlParser: true });

module.exports = mongoose;
