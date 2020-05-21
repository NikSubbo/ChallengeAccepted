const express = require("express");
const parser = require('../middleware/img-upload');

const router = express.Router();
const { User } = require('../models/users')

router.post('/uploadImg', parser.single('file'), async (req, res, next) => {
  try {
    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;
    res.send({ imageUrl: image.url });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id, imageUrl } = req.body;
    await User.findByIdAndUpdate(id, { $set: { avatar: imageUrl } });
    const user = await User.findById(id);
    res.send({ user });
  } catch (error) {
    next(error);
  }
});

router.put('/subscribe', async (req, res, next) => {
  try {
    const { _id, followingId } = req.body;
    let updated;
    const user = await User.findOne({ _id });
    if (user.following.includes(followingId)) {
      updated = await User.updateOne({ _id }, { $pull: { following: followingId } });
    } else {
      updated = await User.updateOne({ _id }, { $push: { following: followingId } });
    }
    if (updated.nModified > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
