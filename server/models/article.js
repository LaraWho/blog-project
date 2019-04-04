const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    default: 'https://ak6.picdn.net/shutterstock/videos/9765866/thumb/1.jpg'
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("article", ArticleSchema)