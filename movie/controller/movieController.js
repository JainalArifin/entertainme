const Movie = require('../models/Movie')

module.exports = {
  all: (req, res) => {
    Movie.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  create: (req, res) => {
    Movie.create({
      title: req.body.title,
      popularity: req.body.popularity,
      poster_path: req.body.poster_path,
      overview: req.body.overview,
      tag: []
    })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  update: (req, res) => {
    Movie.update({_id: req.params.id}, {
      $set: req.body
    })
    .then((dataMovie) => {
      res.send(dataMovie)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  delete: (req, res) => {
    Movie.remove({_id: req.params.id})
    .then((dataMovie) => {
      res.send(dataMovie)
    })
    .catch((err) => {
      res.send(err)
    })
  }
}
