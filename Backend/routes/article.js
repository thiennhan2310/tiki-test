var express = require('express');
var router = express.Router();
const passport = require('passport');
const Article = require('../models/articles');

router.get('/',passport.authenticate('bearer', { session: false }), async function(req, res, next) {
  const articles = await Article.find();
  res.json(articles)
});
router.get('/:id',passport.authenticate('bearer', { session: false }), async function(req, res, next) {
  const id = req.params.id;
  const article = await Article.findOne({_id:id});
  res.json(article)
});

module.exports = router;
