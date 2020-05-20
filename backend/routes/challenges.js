const Challenge = require('../models/challenges');
const router = require('express').Router();


router.get('/', async (req, res, next) => {
  try {
    const challenges = await Challenge.find({});
    res.send(challenges);
  } catch (error) {
    next(error)
  }
})


module.exports = router;
