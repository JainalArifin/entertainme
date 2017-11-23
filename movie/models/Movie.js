const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  popularity: String,
  poster_path: String,
  overview: String,
  tag: []
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie
