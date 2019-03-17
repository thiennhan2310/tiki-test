if (process.env.NODE_ENV === 'production') {
  module.exports = require('./production.config.js');
} else {
  module.exports = require('./local.config.js');
}