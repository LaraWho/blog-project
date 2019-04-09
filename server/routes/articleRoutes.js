const express = require("express");
const articleRoutes = express.Router();
const Article = require("../models/article");

articleRoutes
  .route("/")

  .get((req, res) => {
    Article.find((err, articles) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(articles);
    });
  })

  .post((req, res) => {
    if (Object.keys(req.body) !== 0) {
      const newObj = new Article(req.body);
      newObj.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(newObj);
      });
    } else {
      res.send("Cannot add it!");
    }
  });

articleRoutes
  .route("/:_id")

  .put((req, res) => {
    Article.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true },
      (err, article) => {
        if (err) res.status(500).send(err);
        return res.status(200).send(article);
      }
    );
  })

  .delete((req, res) => {
    Article.findByIdAndDelete({ _id: req.params._id }, err => {
      if (err) return res.status(500).send(err);
      return res.status(200).send("deleted!");
    });
  });

articleRoutes
  .route("/some")

  .get((req, res) => {
    Article.find((err, articles) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(articles);
    })
      .sort({ date: -1 })
      .limit(6);
  });

articleRoutes
  .route("/some/:page")

  .get((req, res) => {
    const options = {
      sort: { date: -1 },
      lean: true,
      page: req.params.page,
      limit: 8
    };
    Article.paginate({}, options, (err, articles) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(articles);
    });
  });

module.exports = articleRoutes;
