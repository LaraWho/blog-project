const express = require('express');
const articleRouter = express.Router();
const Article = require('../models/article');

articleRouter.route('/')

    .get((req, res) => {
      Article.find()
    })