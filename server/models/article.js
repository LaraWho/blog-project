const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  imageText: {
    type: String
  },
  imageURL: {
    type: String,
    default: 'https://cdn3.bigcommerce.com/s-ufhcuzfxw9/product_images/uploaded_images/home-learning-box-3.jpg?t=1505402087&_ga=2.97499545.727283194.1505227100-1284098361.1504812387'
  },
  date: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String,
    required: true
  }
  // topic: {
  //   type: String,
  //   required: true
  // }
})

module.exports = mongoose.model("article", ArticleSchema)