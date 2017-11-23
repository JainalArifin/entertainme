const Tv = require('../models/tv')

module.exports = {
  all: (req, res) => {
    Tv.find()
    .then((dataTv) => {
      res.send(dataTv)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  create: (req, res) => {
    Tv.create({
      name: req.body.name,
      overview: req.body.overview,
      popularity: req.body.popularity
    })
    .then((dataTv) => {
      res.send(dataTv)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  update: (req, res) => {
    Tv.update({_id: req.params.id}, {
      $set: req.body
    })
    .then((dataTv) => {
      res.send(dataTv)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  delete: (req, res) => {
    Tv.remove({_id: req.params.id})
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
  }
}
