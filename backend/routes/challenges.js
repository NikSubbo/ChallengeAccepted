const { Challenge, ChallengeO } = require('../models/challenges');
const { User } = require('../models/users')
const router = require('express').Router();
const parser = require('../middleware/video-upload');

router.get('/', async (req, res, next) => {
  try {
    const challenges = await Challenge.find({});
    res.send(challenges);
  } catch (error) {
    next(error)
  }
})

router.post('/uploadVideo', parser.single('file'), async (req, res, next) => {
  try {
    const video = {};
    video.url = req.file.url;
    res.send({ videoUrl: video.url });
  } catch (error) {
    next(error);
  }
});

router.post('/createChallenge', async (req, res, next) => {
  try {
    const { userId, videoUrl, title, description, hashtags } = req.body;
    const user = await User.findById(userId);
    let hashtag = hashtags.match(/([\w\d]*){3,}/gm);
    hashtag = hashtag.filter(el => el.length >= 3);
    hashtag = hashtag.map(el => { if (el[0] == '#') { return el } else { return '#' + el } });
    const challenge = await Challenge.create({
      title: title,
      description: description,
      hashtags: hashtag,
      url: videoUrl,
      likes: 0,
      date: new Date(),
      user: user,
      answers: [],
    });
    await User.findByIdAndUpdate(userId, { $push: { challenges: challenge._id } });
    const updatedUser = await User.findById(userId);
    res.send({ challenge, updatedUser });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
