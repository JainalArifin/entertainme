const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tvSchema = new Schema({
  name: String,
  overview: String,
  popularity: String,
  tag:[]
})

const tv = mongoose.model('tv', tvSchema)

module.exports = tv
