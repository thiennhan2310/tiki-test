var express = require('express');
var router = express.Router();
const path = require('path')

router.get('*', function (req, res, next) {
  console.log(path.join(__dirname + '/../public/build/index.html'));
  console.log();
  res.sendfile(path.join(__dirname + '/../public/build/index.html'));
});
module.exports = router;
