const express = require('express');
const articleRoutes = express.Router();
const Article = require('../models/article');

articleRoutes.route('/')

    .get((req, res) => {
      Article.find((err, articles) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(articles)
      })
    })

    .post((req, res) => {
      console.log(req.body)
      if(Object.keys(req.body) !== 0) {
        const newObj = new Article(req.body)
        newObj.save(err => {
          if(err) return res.status(500).send(err)
          return res.status(200).send(newObj)
        })
      } else {
        res.send('Cannot add it!')
      }
    })

module.exports = articleRoutes