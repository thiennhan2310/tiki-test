var express = require('express');
var router = express.Router();
const passport = require('passport');
const Article = require('../models/articles');
const path = require('path');
const fp = require('lodash/fp');

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
    const articleId = article._id;
    const images = await _addImages(articleId, req.files)
    await Article.updateOne({ _id: articleId }, { images });

    res.json(article)
  });

router.put('/:id',
  // passport.authenticate('bearer', { session: false }),
  async function (req, res, next) {
    const articleId = req.params.id;
    const { title, price } = req.body;
    const { images: currentImages } = await Article.findOne({ _id: articleId });

    const images = await _editImages(articleId, req.files, currentImages)
    const article = await Article.updateOne({ _id: articleId }, { title, price, images });
    res.json({ title, price, images })
  });

const _addImages = async (articleId, images) => {
  const result = [];
  const keys = Object.keys(images)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const image = images[key];
    const imageName = `${articleId}-${i}-${image.name}`;
    const imagePath = path.join(__dirname, `/../public/images/${imageName}`)
    try {
      await image.mv(imagePath);
      result.push(imageName)
    } catch (err) {
      console.log(err);
    }
  }
  return result;
}

const _getImageIdx = (key) => {
  return key.split('image-')[1]
}
const _editImages = async (articleId, images, currentImages) => {
  const result = currentImages;
  const keys = Object.keys(images)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const image = images[key];
    const idx = _getImageIdx(key);

    const imageName = `${articleId}-${idx}-${image.name}`;
    const imagePath = path.join(__dirname, `/../public/images/${imageName}`)
    try {
      await image.mv(imagePath);
      result[idx] = imageName
    } catch (err) {
      console.log(err);
    }
  }
  return result;
}


module.exports = router;
