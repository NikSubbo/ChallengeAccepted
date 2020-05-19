const express = require("express");
const parser = require('../middleware/img-upload');

const router = express.Router();
const User = require('../models/users')

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
    const user = await User.findByIdAndUpdate(id, { $set: { avatar: imageUrl } });
    res.send({ user });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
