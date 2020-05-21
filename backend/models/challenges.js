const mongoose = require('mongoose');
const { userSchema } = require('./users');

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashtags: Array,
  url: String,
  likes: Array,
  date: String,
  user: userSchema,
  answers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
  }]
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = {
  Challenge,
  challengeSchema
}
