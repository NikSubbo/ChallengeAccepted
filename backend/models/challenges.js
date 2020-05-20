const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashtags: Array,
  url: String
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge
