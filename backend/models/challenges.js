const mongoose = require('mongoose');
const { userSchema } = require('./users');

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  hashtags: Array,
  url: String,
  likes: Number,
  date: Date,
  user: userSchema,
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = {
  Challenge,
  challengeSchema,
}
