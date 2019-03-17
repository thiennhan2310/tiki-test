var express = require('express');
var router = express.Router();
const passport = require('passport');
const Article = require('../models/articles');

router.get('/',
  // passport.authenticate('bearer', { session: false }),
  async function (req, res, next) {
    const articles = await Article.find();
    res.json(articles)
  });
router.get('/:id', passport.authenticate('bearer', { session: false }), async function (req, res, next) {
  const id = req.params.id;
  const article = await Article.findOne({ _id: id });
  res.json(article)
});

router.post('/',
  // passport.authenticate('bearer', { session: false }),
  async function (req, res, next) {
    const { title, price } = req.body;
    const article = await Article.create({ title, price });
    res.json(article)
  });

router.put('/:id',
  // passport.authenticate('bearer', { session: false }),
  async function (req, res, next) {
    const id = req.params.id;
    const { title, price } = req.body;
    const article = await Article.updateOne({ _id: id }, { title, price });
    res.json(article)
  });

module.exports = router;
